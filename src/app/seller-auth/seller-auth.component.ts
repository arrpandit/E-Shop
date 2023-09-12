import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { login } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private service:SellerService, private router:Router) { }
  seller_toggle_flip=false;
  loginErrorMsg:string=""
  ngOnInit(): void {
    this.service.sellerRelload();
  }

  signUp(data:any){
    // console.log(data);
    // this.service.userSignUp(data).subscribe((res)=>{
    //   console.log(res)
    //   this.router.navigate(['seller-home'])
    // })
    
    if(data.name && data.password && data.email){
      // console.log("aksdhuashdja")
      this.service.userSignUp(data)
    }else{

    }
  }

  login(data:login){
    if(data.password && data.email){
      // console.log("aksdhuashdja")
      this.service.userLogin(data)
    }
    
    // console.log("login data----",data)
    this.loginErrorMsg = ""
    this.service.isLoginError.subscribe((err)=>{     
      if(err){
        this.loginErrorMsg="Email or Password is invalid"
      }else{
        console.log("navigate---")
        this.router.navigate(['seller-home'])
      }
    })

  }

  // seller_toggle_flip(){
  //   console.log("dbsjbdjsbdjbdjabdjabdj")
  // }

  havingLogin(){
    this.seller_toggle_flip=false;

  }

  nothavingLogin(){
    this.seller_toggle_flip=true;

  }

}
