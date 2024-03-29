import { Component, OnInit } from '@angular/core';
import { products } from '../data-type';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent implements OnInit {

  constructor(private productService:ProductsService,private router:Router) { }
  productlist:undefined|products[]
  fakeproduct:undefined|products[]

  ngOnInit(): void {
    this.list();
    this.productService.getProducts().subscribe((res)=>{
      this.fakeproduct = res;      
    })
  }

  deleteproducts(id:string){
    this.productService.deleteProducts(id).subscribe((res)=>{
      this.list();
    })    
  }

  list(){
    this.productService.getProducts().subscribe((val)=>{
      this.productlist=val
    })
  }

  editProductDetails(id:number){
    this.router.navigate(['seller-update-products'])
  }

}
