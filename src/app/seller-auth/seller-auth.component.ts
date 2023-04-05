import { Component, OnInit } from '@angular/core';
import { SellersService } from '../services/sellers.service';
import { Router } from '@angular/router';
import { dataType } from 'src/data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller : SellersService,private router:Router) { }

  ngOnInit(): void {
  }
  signUp(data:dataType):void{
    console.table(data)
    this.seller.userSgnUp(data).subscribe((res)=>{
      console.log("res---",res)
      if(res){
        this.router.navigate(['seller-home'])
      }
    })


  }

}
