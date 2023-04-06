import { Component, OnInit } from '@angular/core';
import { SellersService } from '../services/sellers.service';
import { Router } from '@angular/router';
import { dataType } from 'src/data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellersService, private router: Router) {}

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  showLogin = false
  move: boolean = false;
  signUp(data: dataType): void {
    console.log('signUp data---', data);
    // this.seller.userSgnUp(data).subscribe((res)=>{
    //   console.log("res---",res)
    //   if(res){
    //     this.move=true
    //     this.router.navigate(['seller-home'])
    //   }
    // })

    this.seller.userSgnUp(data);
  }
  login(data: dataType): void {
    console.log('login data---', data);
    this.seller.userLogIN(data);
  }
  openLogin(){
    this.showLogin=true
  }
  opensignup(){
    this.showLogin=false
  }
}
