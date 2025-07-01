import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-produc',
  standalone: false,
  templateUrl: './all-produc.component.html',
  styleUrl: './all-produc.component.scss'
})
export class AllProducComponent implements OnInit {

  products:any[]=[];
  categories:any[]=[];
  loading:boolean = false;
  cartproduct:any[] =[]
Option: any;
filtercategory: any;
  constructor(private service:ProductsService){}
  ngOnInit(): void {
    this.getproducts()
    this.getcategories()
  }
    getproducts(){
      this.loading =true
    this.service.getAllproducts().subscribe((res:any) =>{
      this.products = res
      this.loading = false

    
    } , error => {
      this.loading = false
      alert("Error")
    }
    )
    }
    getcategories(){
      this.loading =true
      this.service.getAllcategories().subscribe((res:any) =>{
        this.categories = res
        this.loading =false
      
      } , error => {
        this.loading =false
        alert("Error")
      }
      )
      }
      filterCategory(event:any){
        let value = event.target.value;
        (value =="all") ? this.getproducts() : this.getproductcategory(value)
          
      }
      getproductcategory(keyword:string){
        this.loading = true
        this.service.getProductsByCategory(keyword).subscribe((res:any) => {
        this.products = res
        this.loading =false
        })

      }
    addTocart(event:any){
    if("cart" in localStorage){
    this.cartproduct = JSON.parse(localStorage.getItem("cart")!)
    let exist = this.cartproduct.find(item => item.id == event.id)
    if(exist){
      alert("product is alerady in your cart")
    }else{
      this.cartproduct.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartproduct))
    }
    
    }else{
      this.cartproduct.push(event)
    localStorage.setItem("cart", JSON.stringify(this.cartproduct))
    }
    
    }
  }

