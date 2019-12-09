import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
                      new Recipe('A Recipe name', 'description of the recipe',
                      'http://www.peakpx.com/624431/dishes-kitchen-bio-food-recipe-food-and-drink-no-people'),
                      new Recipe('A Recipe name', 'description of the recipe',
                      'http://www.peakpx.com/624431/dishes-kitchen-bio-food-recipe-food-and-drink-no-people'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
