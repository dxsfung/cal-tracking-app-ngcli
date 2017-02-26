import { Component } from '@angular/core';
import { FoodItem } from './fooditem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public masterFoodList: FoodItem[] = [
      new FoodItem("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
      new FoodItem("Fries", "I only ate half of them", 365),
  ];

  selectedFood: FoodItem = null;
  showDetails (clickedFood: FoodItem) {
      this.selectedFood = clickedFood;
  }
  deleteDetails (clickedFood: FoodItem) {
      var a = this.masterFoodList.indexOf(clickedFood);
      console.log( "value of a" + a);
      this.masterFoodList.splice(a, 1);
  }
  finishedEditing () {
      this.selectedFood = null;
  }
  addFood (newFoodFromChild: FoodItem) {
      this.masterFoodList.push(newFoodFromChild);
  }
}
