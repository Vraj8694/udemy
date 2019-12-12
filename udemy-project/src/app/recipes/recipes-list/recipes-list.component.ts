import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
                      new Recipe('A Recipe name', 'description of the recipe',
                      'http://www.peakpx.com/624431/dishes-kitchen-bio-food-recipe-food-and-drink-no-people'),
                      new Recipe('just Recipe name', 'description of the recipe',
                      'http://www.peakpx.com/624431/dishes-kitchen-bio-food-recipe-food-and-drink-no-people'),
  ]

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeEl:Recipe){
    this.recipeWasSelected.emit(recipeEl);
  }
}
