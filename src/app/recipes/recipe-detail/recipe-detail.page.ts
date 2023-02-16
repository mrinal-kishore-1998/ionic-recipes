import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeID')) {
        // redirect
        return;
      }
      const recipeId = paramMap.get('recipeID');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }

  /**
   * onDeleteRecipe() will call the delete recipe method in service class
   */
  onDeleteRecipe() {
    this.alertCtrl
      .create({
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              this.recipeService.deleteRecipe(this.loadedRecipe.id);
              this.router.navigate(['/recipes']);
            },
          },
        ],
        header: 'Are you sure ?',
        message: 'Do you really want to delete the recipe ?',
      })
      .then((alertEle) => {
        alertEle.present();
      });
  }
}
