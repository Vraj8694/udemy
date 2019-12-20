import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor(private recipesService:RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

}
