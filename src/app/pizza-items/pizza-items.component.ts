import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';
import { ActivatedRoute } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-pizza-items',
  templateUrl: './pizza-items.component.html',
  styleUrls: ['./pizza-items.component.css']
})
export class PizzaItemsComponent implements OnInit {

  pizza : Pizza[];
  cat : any;

  filltredPizza : Pizza[];

  constructor(private pizzaService:PizzaService , private route:ActivatedRoute) { 

    this.route.paramMap.subscribe( parametre => this.cat = parametre.get('cat'))
  
  } 
  
  ngOnInit() {

    this.pizza = this.pizzaService.getpizza();
    
    this.route.paramMap.subscribe( parametre => { 
      this.cat = parametre.get('cat'),
      this.reload();
    })
  } 

  private reload() {
    this.filltredPizza = this.pizzaService.filterCategories(this.cat);
  }
}
