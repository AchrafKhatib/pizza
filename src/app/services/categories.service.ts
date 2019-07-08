import { Injectable } from '@angular/core';
import { Categories } from '../models/categories'


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  cat : Categories [];

  getcategories(){
    
    return this.cat = [
      { image : '../../assets/images/pizzamargarita.jpg' , title : 'pizza-margarita'},
      { image : '../../assets/images/cropped-pizza.jpg' , title : 'cropped-pizza'},
      { image : '../../assets/images/banniereroyal.jpg' , title : 'banniere-royal'},
    ]
  };
}
