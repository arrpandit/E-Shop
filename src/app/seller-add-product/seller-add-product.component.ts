import { Component, OnInit } from '@angular/core';
import { SellersService } from '../services/sellers.service';
import { ProductsService } from '../services/products.service';
import { products } from 'src/data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent implements OnInit {
  addproductsmessage: string | undefined;
  productAdded: boolean = false;
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {}
  // productStore(data: products) {  //1
  //   if (data.name.length) {
  //     this.productService.addProduct(data);
  //     if (this.productService.isProductAddes) {
  //       this.productAdded = true;
  //       this.addproductsmessage = 'Product added Successfully!';
  //     }
  //   }
  // }

  productStore(data: products) {  //2
    this.productService.addProduct(data).subscribe((res)=>{
      if(res){
        this.addproductsmessage ="Product added Successfully!"
      }
      setTimeout(()=>this.addproductsmessage=undefined ,1000)
    })
  }

  
}
