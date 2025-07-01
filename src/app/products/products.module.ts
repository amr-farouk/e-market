import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProducComponent } from './components/all-produc/all-produc.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { Product1Component } from './components/product1/product1.component';



@NgModule({
  declarations: [
    AllProducComponent,
    ProductsDetailsComponent,
    Product1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
    
  ]
})
export class ProductsModule { }
