import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { products } from 'src/data-type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchResult:undefined|products[]
  constructor(private activatedroute:ActivatedRoute , private productservice:ProductsService) { }

  ngOnInit(): void {
    let query =this.activatedroute.snapshot.paramMap.get('query')
    console.log("search product--",query) 
    query && this.productservice.searchProducts(query).subscribe((res)=>{
      this.searchResult=res

    })


  }

}
