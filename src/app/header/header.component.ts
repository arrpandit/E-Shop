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
  username:string=''
  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType='seller'
          let sellerstore= localStorage.getItem('seller')
          let sellerdata = sellerstore && JSON.parse(sellerstore)[0];
          console.log("seller---",sellerdata)
          this.sellername = sellerdata.name
        }else if(localStorage.getItem('user')){
          let userstore = localStorage.getItem('user')
          let userdata = userstore && JSON.parse(userstore)
          if(userdata.name==undefined){
            this.username=userdata[0].name
          }else{
            this.username= userdata.name
          }
          console.log("userstore---",this.username)
          this.menuType='user'
        }else{
          console.log("outside seller")
          this.menuType='default'
        }
      }
    })
  }

  userlogout()
  {
    localStorage.clear()
    this.route.navigate(['user-login'])
  }

  logout(){
    localStorage.clear()
    this.route.navigate(['/'])
  }
  searchevent(searchvalue:KeyboardEvent){
    if(searchvalue){
      const element = searchvalue.target as HTMLInputElement
      this.producstservice.searchProducts(element.value).subscribe((res)=>{
        // console.log("serch---",res)
        this.searchres=res

      })
    }

  }
  hidesearchres(){
    this.searchres=undefined
  }

  submitsearch(val:string){
    console.log("search value-----",val)
    this.route.navigate([`search/${val}`])
  }

}
