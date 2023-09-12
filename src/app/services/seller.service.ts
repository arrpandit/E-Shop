import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, JsonpInterceptor } from '@angular/common/http'
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs'
import { login, signUp } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLogedIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false);
  userSignUp(data: signUp) {
    // return this.http.post('http://localhost:3000/seller',data);
    this.http.post("http://localhost:3000/seller", data, { observe: 'response' }).subscribe((res) => {
      console.log(res);
      this.isSellerLogedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(res.body));
      this.router.navigate(['seller-home'])
    })
  }

  sellerRelload() {
    if (localStorage.getItem('seller')) {
      this.isSellerLogedIn.next(true);
      this.router.navigate(['seller-home'])
    }
  }

  userLogin(data:login){
    // this.http.get(`http://localhost:3000/seller?email=ashish@123gmail.com&password=abc@123`)
    this.http.get(`http://localhost:3000/seller?email=${data.email}&${data.password}`,{observe:'response'}).subscribe((res:any)=>{
      if(res.body && res && res.body.length){
        localStorage.setItem('seller',JSON.stringify(res.body));
        this.router.navigate(['seller-home'])
      }else{
        this.isLoginError.emit(true)
      }
    })
  }
  constructor(private http: HttpClient, private router: Router) { }
}
