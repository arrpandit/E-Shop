import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { products } from 'src/data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route : Router , private producstservice:ProductsService) { }
  menuType:string='default'
  searchres:undefined|products[]
  sellername : string=''
  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.log("inside seller")
          this.menuType='seller'
          let sellerstore= localStorage.getItem('seller')
          let sellerdata = sellerstore && JSON.parse(sellerstore)[0];
          this.sellername = sellerdata.name
        }else{
          console.log("outside seller")
          this.menuType='default'
        }
      }
    })
  }

  logout(){
    localStorage.clear()
    this.route.navigate(['/'])
  }
  searchevent(searchvalue:KeyboardEvent){
    if(searchvalue){
      const element = searchvalue.target as HTMLInputElement
      this.producstservice.searchProducts(element.value).subscribe((res)=>{
        // console.log("res---",res)
        this.searchres=res

      })
    }

  }
  hidesearchres(){
    this.searchres=undefined
  }

}
