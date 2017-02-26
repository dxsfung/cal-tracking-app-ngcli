import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FoodItem } from './../fooditem.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {

    @Input() childFoodList: FoodItem[];
    @Output() clickSender = new EventEmitter();
    @Output() deleteSender = new EventEmitter();

    public selectedFoodCategory: string = "all";

editButtonHasBeenClicked(foodToEdit: FoodItem) {
    this.clickSender.emit(foodToEdit);
}
deleteButtonClicked(foodTodelete: FoodItem) {
    console.log ("delete");
    this.deleteSender.emit(foodTodelete);
}
onChange(optionFromFood) {
    this.selectedFoodCategory = optionFromFood;
}
}
