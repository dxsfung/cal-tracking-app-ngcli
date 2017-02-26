import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavTagComponent } from './nav-tag/nav-tag.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodCategoryPipe } from './food-category.pipe';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { FoodDisplayComponent } from './food-display/food-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NavTagComponent,
    FoodListComponent,
    FoodCategoryPipe,
    EditFoodComponent,
    NewFoodComponent,
    FoodDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
