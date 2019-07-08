import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaItemsComponent } from './pizza-items/pizza-items.component';

const routes: Routes = [

  //{path:'pizza-margarita' , component: PizzaItemsComponent},
  //{path:'cropped-pizza' , component: PizzaItemsComponent},
  //{path:'banniere-royal' , component: PizzaItemsComponent},

  {path:'items/:cat' , component: PizzaItemsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
