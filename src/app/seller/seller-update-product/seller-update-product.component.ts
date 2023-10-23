import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/product/products.service';
import { products } from '../../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData:undefined|any
  edit_productId:undefined|any;
  constructor(private route:ActivatedRoute,private productService:ProductsService,private router:Router) { }

  ngOnInit(): void {
    let productid = this.route.snapshot.paramMap.get('id');
    this.edit_productId = productid
    productid && this.productService.getProductbyID(productid).subscribe((res)=>{
      //impliment try catch ,what id=f anyone try to access out of the page means id=70 which is available
      this.productData = res      
    })
  }


  //will check the error (API not calling properlly)
  
  updateProducts(data:any){
    // this.productId = this.productData?.id;
    console.log("id-------------",data);
    
    this.productService.updateProduct(this.edit_productId,data).subscribe((res)=>{
      this.router.navigate(['products'])
    })

  }
}
