import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sellerName:string="";
  userLogined:boolean = false;
  sellerLogined:boolean = false;
  userName:string = ""
  constructor(private route:Router) { }
  menutype:string="default"
  ngOnInit(): void {
    //indetifying the URL
    this.route.events.subscribe((val:any)=>{
      // console.log("url---------",val.url)
      if(val.url){
        if(localStorage.getItem('seller') || val.url.includes('seller')){
          this.menutype="seller"
          let localStorageData = localStorage.getItem('seller');
          if(localStorageData){
            console.log("url---------",val.url)
            let bodydata = localStorageData && JSON.parse(localStorageData)[0];
            this.sellerName=bodydata.name
            this.sellerLogined = true
          }
          
        }else if(localStorage.getItem("user") || val.url.includes("user")){
          this.menutype = "user"
          let localdata = localStorage.getItem("user")
          if(localdata){
            // console.log("url---------",val.url)
            let bodydata = localdata && JSON.parse(localdata)            
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

}
