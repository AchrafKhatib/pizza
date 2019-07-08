import { Component, OnInit } from '@angular/core';
import { Categories } from '../models/categories';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-ourpizza',
  templateUrl: './ourpizza.component.html',
  styleUrls: ['./ourpizza.component.css']
})
export class OurpizzaComponent implements OnInit {

  categories : Categories[];
  constructor(private categoriesService:CategoriesService) { }

  ngOnInit() {
    this.categories = this.categoriesService.getcategories();
  }

}
