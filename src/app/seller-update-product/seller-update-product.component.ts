import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/data-type';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css'],
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined | products;
  updatedmsg:undefined|string

  constructor(
    private route: ActivatedRoute,
    private productservice: ProductsService
  ) {}

  ngOnInit(): void {
    let productID = this.route.snapshot.paramMap.get('id');
    this.productservice.getProductByID(productID).subscribe((res) => {
      this.productData = res;
      // console.log("product id-----",productID,res)
    });
  }

  productupdate(data: products) {
    if(this.productData){
      data.id=this.productData.id
    }
    this.productservice.updateProduct(data).subscribe((res) => {
      if (res) {
        console.log('data updated', res);
        this.updatedmsg = "Product updated successfully!"
      }
    });
    setTimeout(() => {
      this.updatedmsg=undefined
    }, 1000);
  }
}
