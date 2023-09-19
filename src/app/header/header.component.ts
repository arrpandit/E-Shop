import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sellerName:string="";
  constructor(private route:Router) { }
  menutype:string="default"
  ngOnInit(): void {
    //indetifying the URL
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') || val.url.includes('seller')){
          this.menutype="seller"
          let localStorageData = localStorage.getItem('seller');
          if(localStorageData){
            let bodydata = localStorageData && JSON.parse(localStorageData)[0];
            this.sellerName=bodydata.name
          }
          
        }else{
          console.log("not in seller area")
          this.menutype = "default"
        }
      }
    })
  }

  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }

}
