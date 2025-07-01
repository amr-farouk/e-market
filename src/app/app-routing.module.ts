import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { AllProducComponent } from './products/components/all-produc/all-produc.component';
import { CartComponent } from './carts/components/cart/cart.component';


const routes: Routes = [
  {path:"products" , component:AllProducComponent},
  {path:"details" , component:ProductsDetailsComponent},
  {path:'cart' , component:CartComponent},
  {path:"**" , redirectTo:"products" , pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
