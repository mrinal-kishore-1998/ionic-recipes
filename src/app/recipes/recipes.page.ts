import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: '1',
      title: 'Garlic Lemon Scallops',
      imageUrl: 'https://t.ly/RgSM',
      ingredients: [
        'Butter',
        'Minced garlic',
        'Large Sea Scallops',
        'Fresh Lemon Juice',
        'Salt',
        'Pepper',
      ],
      amount: [
        '¾ cup',
        '3 tablespoons',
        '2 pounds',
        '2 tablespoons',
        '1 teaspoon',
        '⅛ teaspoon',
      ],
    },
    {
      id: '2',
      title: 'Pesto Pasta with Chicken',
      imageUrl: 'https://t.ly/gqSZ',
      ingredients: [
        'Bow Tie pasta',
        'Olive oil',
        'Garlic, minced',
        'Boneless chicken breasts, cut into bite-sized pieces',
        'Red pepper flakes',
        'Pesto sauce',
        'Sun-dried tomatoes',
      ],
      amount: [
        '1 (16 ounce)',
        '1 teaspoon',
        '2 cloves',
        '2',
        '1 pinch',
        '½ cup',
        '⅓ cup',
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
