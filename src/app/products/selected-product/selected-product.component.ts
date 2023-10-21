import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/product/products.service';
import { products } from 'src/data-type';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {
  data:undefined|products[]=[];

  constructor(private route : ActivatedRoute, private productService:ProductsService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    // let productid = this.route.snapshot.paramMap.get('id');
    if(productId){
      this.productService.getProductbyID(productId).subscribe((res:any)=>{
        if(res){
          // console.log("res--------------",res);
          this.data?.push(res);
        }
        
      })
    }
    
    console.log("product is---------",this.data);
    
  }

}
