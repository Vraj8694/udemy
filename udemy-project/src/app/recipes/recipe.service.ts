import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A Recipe name',
         'description of the recipe',
        'http://www.peakpx.com/624431/dishes-kitchen-bio-food-recipe-food-and-drink-no-people',
         [
             new Ingredient('meat', 1),
             new Ingredient('french fries', 20)
         ]),
        new Recipe('just Recipe name', 
        'description of the recipe',
        'http://www.peakpx.com/624431/dishes-kitchen-bio-food-recipe-food-and-drink-no-people',
        [
            new Ingredient('bread', 1),
             new Ingredient('cake', 20)
        ]),
]
getRecipes(){
    return this.recipes.slice();
}
}