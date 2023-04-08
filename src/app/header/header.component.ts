import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route : Router) { }
  menuType:string='default'
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

}
