import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/product/products.service';
import { products } from 'src/data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  SearchResult : undefined|products[]
  sellerName:string="";
  userLogined:boolean = false;
  sellerLogined:boolean = false;
  userName:string = ""
  constructor(private route:Router,private productService : ProductsService) { }
  menutype:string="default"
  ngOnInit(): void {
    //indetifying the URL
    this.route.events.subscribe((val:any)=>{
      // console.log("userLogined---------",this.userLogined)
      if(val.url){
        if(localStorage.getItem('seller') || val.url.includes('seller')){
          this.menutype="seller"
          let localStorageData = localStorage.getItem('seller');
          if(localStorageData){
            this.sellerName=localStorageData && JSON.parse(localStorageData);
            this.sellerLogined = true
          }
          
        }else if(localStorage.getItem("user") || val.url.includes("user")){
          this.menutype = "user"
          let localdata = localStorage.getItem("user")
          if(localdata){
            let bodydata = localdata && JSON.parse(localdata)            
            // console.log("url   bodydata---------",bodydata)
            if(bodydata.name){
              this.userName = bodydata.name
            }
            else{
              this.userName = bodydata[0].name
            }
            this.userLogined = true
            // this.userName = bodydata.name
          }
        }
        else{
          // console.log("not in seller area")
          this.menutype = "default"
        }
      }
    })
  }

  logout(){
    if(localStorage.getItem("user")){
      this.userLogined = false
      localStorage.removeItem("user")
    }else if(localStorage.getItem("seller")){
      this.sellerLogined = false
      localStorage.removeItem('seller');
    }
    this.menutype = "default"
    this.route.navigate(['/'])
  }

  //if we not path any query then backend crassed ?
  SearchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement
      console.log("query----",element.value);
      // 
      this.productService.searchProduct(element.value).subscribe((res:any)=>{   
        console.log("response------------",res)
        if(res.Status == "Success"){
          console.log("success-----------------",res.status);
          
          res.length = 5
          this.SearchResult = res.Data       
        }else{
          console.log("failed-----------------",res.status);
        } 
      })      
    }
    // console.log("search result ------------",this.SearchResult);
  }
  hideResult(){
    this.SearchResult = undefined
  }

  seachProduct(query:string){
    this.route.navigate([`search/:${query}`])
  }

}
