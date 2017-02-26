import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FoodItem } from './../fooditem.model';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})

export class EditFoodComponent {
  @Input() childSelectedFood: FoodItem;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
