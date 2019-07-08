import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
 
@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  pz : Pizza [];

  constructor() { }

  getpizza(){
    
    return this.pz = [
      { title_cat :"banniere-royal" , size : 10 , taken:true},
      { title_cat :"banniere-royal" , size : 20 , taken:false},

      { title_cat :"pizza-margarita" , size : 10 , taken:true},
      { title_cat :"pizza-margarita" , size : 20 , taken:false},
      { title_cat :"pizza-margarita" , size : 30 , taken:true},
    
      { title_cat :"cropped-pizza" , size : 10 , taken:true},
      { title_cat :"cropped-pizza" , size : 20 , taken:false},
      { title_cat :"cropped-pizza" , size : 56 , taken:true},
      { title_cat :"cropped-pizza" , size : 40 , taken:false},

    
    ]
  };

  filterCategories( cat ) {

    console.log(cat);
    
    return this.getpizza().filter(function(item){ return item.title_cat == cat})
  }
}
