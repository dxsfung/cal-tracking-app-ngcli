import { Component, Input } from '@angular/core';
import { FoodItem } from './../fooditem.model';

@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrls: ['./food-display.component.css']
})
export class FoodDisplayComponent {
  @Input() food: FoodItem;
  }
