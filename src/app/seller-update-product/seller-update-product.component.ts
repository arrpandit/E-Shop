import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { products } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData:undefined|any
  constructor(private route:ActivatedRoute,private productService:ProductsService,private router:Router) { }

  ngOnInit(): void {
    let productid = this.route.snapshot.paramMap.get('id');
    productid && this.productService.getProductbyID(productid).subscribe((res)=>{
      //impliment try catch ,what id=f anyone try to access out of the page means id=70 which is available
      this.productData = res      
    })
  }


  //will check the error (API not calling properlly)
  productId:undefined|number;
  updateProducts(data:any){
    this.productId = this.productData?.id;
    this.productService.updateProduct(this.productId,data).subscribe((res)=>{
      this.router.navigate(['products'])
    })

  }
}
