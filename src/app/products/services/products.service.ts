import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllproducts() {
    return this.http.get(environment.baseApi +'products');
  }
  getAllcategories(){
    return this.http.get(environment.baseApi +'products/categories');
  }
  getProductsByCategory(keyword:string){
    return this.http.get(environment.baseApi +'products/category/'+keyword);
  }
}