import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private service:SellerService, private router:Router) { }

  ngOnInit(): void {
    this.service.sellerRelload();
  }

  signUp(data:any){
    // console.log(data);
    // this.service.userSignUp(data).subscribe((res)=>{
    //   console.log(res)
    //   this.router.navigate(['seller-home'])
    // })

    this.service.userSignUp(data)
  }

}
