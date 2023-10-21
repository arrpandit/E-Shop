import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/product/products.service';
import { products } from 'src/data-type';

@Component({
  selector: 'app-each-product-details',
  templateUrl: './each-product-details.component.html',
  styleUrls: ['./each-product-details.component.css']
})
export class EachProductDetailsComponent implements OnInit {

  constructor(private routeid : ActivatedRoute,private productService:ProductsService) { }
  product:any|products
  ngOnInit(): void {
    let productId = this.routeid.snapshot.paramMap.get('id');
    productId && this.productService.getProductbyID(productId).subscribe((res)=>{
      if(res){
        this.product = res;
        console.log("product---------by id---",this.product)
      }
    })
  }



}
