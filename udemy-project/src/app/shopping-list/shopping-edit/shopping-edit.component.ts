import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", {static:false}) nameInputRef:ElementRef;
  @ViewChild("amountInput", {static:false}) amountInputRef:ElementRef;

  ingName:any;
  ingAmount:any;
  newIngredient:any;

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
  }

  onAdd(){
    this.ingName = this.nameInputRef.nativeElement.value;
    this.ingAmount = this.amountInputRef.nativeElement.value;
    this.newIngredient = new Ingredient(this.ingName, this.ingAmount);
    this.slService.addIngredient(this.newIngredient);
  }

}
