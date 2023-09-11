import { Injectable } from '@angular/core';
import { HttpClient, JsonpInterceptor } from '@angular/common/http'
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLogedIn = new BehaviorSubject<boolean>(false)
  userSignUp(data: any) {
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
  constructor(private http: HttpClient, private router: Router) { }
}
