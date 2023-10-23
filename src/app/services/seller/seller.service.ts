import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, JsonpInterceptor } from '@angular/common/http'
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs'
import { login, signUp } from '../../data-type';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLogedIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false);
  userSignUp(val: any) {
    this.http.post("http://localhost:5000/seller/signup", val, { observe: 'response' }).subscribe((res:any) => {
      if(res.body && res.body.status=="Success")
      this.isSellerLogedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(res.body.data.name));
      this.router.navigate(['products'])
    })
  }

  sellerRelload() {
    if (localStorage.getItem('seller')) {
      this.isSellerLogedIn.next(true);
      this.router.navigate(['products'])
    }
  }

  userLogin(data: login) {
    // this.http.get(`http://localhost:3000/seller?email=ashish@123gmail.com&password=abc@123`)
    // this.http.get("http://localhost:5000/seller/login",data).subscribe((res:any)=>{
    //   this.http.get(`http://localhost:3000/seller?email=${data.email}&${data.password}`,{observe:'response'}).subscribe((res:any)=>{
    //   if(res.body && res && res.body.length){
    //     localStorage.setItem('seller',JSON.stringify(res.body));
    //     this.router.navigate(['products'])
    //   }else{
    //     this.isLoginError.emit(true)
    //   }
    // })

    this.http.post(`http://localhost:5000/seller/login`, data, { observe: 'response' }).subscribe((res: any) => {
      if (res.body.data && res.body.status == "Success") {
        localStorage.setItem('seller', JSON.stringify(res.body.data[0].name));
        this.router.navigate(['products'])
      } else {
        this.isLoginError.emit(true)
      }
    })
  }
  constructor(private http: HttpClient, private router: Router) { }
}
