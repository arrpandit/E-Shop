import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/product/products.service';
import { products } from 'src/data-type';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {
  searchResult: undefined | products[]

  constructor(private productService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let query = this.route.snapshot.paramMap.get('query')
    if (query) {
      this.productService.searchProduct(query).subscribe((res:any) => {
        if(res){
          this.searchResult = res
        }
      })
    }
    console.log("this.searchResult-------------",this.searchResult);
    
  }




}
