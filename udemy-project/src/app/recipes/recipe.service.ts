import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
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
constructor(private slService:ShoppingListService){}

getRecipes(){
    return this.recipes.slice();
}

addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
}

}
