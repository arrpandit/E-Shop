import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { products } from 'src/data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  popularProduct: undefined | products[];
  trendingProducts:undefined|products[]
  constructor(private productservice: ProductsService) {}

  ngOnInit(): void {
    this.productservice.popularProducts().subscribe((res) => {
      this.popularProduct = res;
      console.table(res);
    });
    this.productservice.trendingProducts().subscribe((data)=>{
      this.trendingProducts=data
    })
  }
}
