import { Component, OnInit } from '@angular/core';
import { SellersService } from '../services/sellers.service';
import { Router } from '@angular/router';
import { login, signup } from 'src/data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellersService, private router: Router) {}
  authError:string=''
  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  showLogin = false
  move: boolean = false;
  signUp(data: signup): void {
    // console.log('signUp data---', data);
    // this.seller.userSgnUp(data).subscribe((res)=>{
    //   console.log("res---",res)
    //   if(res){
    //     this.move=true
    //     this.router.navigate(['seller-home'])
    //   }
    // })

    this.seller.userSgnUp(data);
  }
  login(data: login): void {
    this.authError=''
    // console.log('login data---', data);
    this.seller.userLogIN(data);
    this.seller.isLoginError.subscribe((Error)=>{
      if(Error){
        this.authError="Credential incorrect"
      }
    })
  }
  openLogin(){
    this.showLogin=true
  }
  opensignup(){
    this.showLogin=false
  }
}
