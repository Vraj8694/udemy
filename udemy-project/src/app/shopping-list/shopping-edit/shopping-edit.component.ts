import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", {static:false}) nameInputRef:ElementRef;
  @ViewChild("amountInput", {static:false}) amountInputRef:ElementRef;
  @Output() ingredientAdded =  new EventEmitter<Ingredient>();
  ingName:any;
  ingAmount:any;
  newIngredient:any;
  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    this.ingName = this.nameInputRef.nativeElement.value;
    this.ingAmount = this.amountInputRef.nativeElement.value;
    this.newIngredient = new Ingredient(this.ingName, this.ingAmount);
    this.ingredientAdded.emit(this.newIngredient);
  }

}
