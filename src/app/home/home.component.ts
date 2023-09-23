import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { products } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularProducts:undefined|products[]
  constructor(private productservice:ProductsService) { }
  allproducts:undefined|products[];

  ngOnInit(): void {
    this.productservice.getProducts().subscribe((res)=>{
      this.popularProducts = res
    })
    this.productservice.getProducts().subscribe((res)=>{
      this.allproducts = res
    })
  }

  // images = [144, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  // getallproduct(){
  //   this.productservice.getProducts().subscribe((res)=>{
  //     this.allproducts = res
  //     console.log("allproducts----",this.allproducts)
  //   })
  // }
}
