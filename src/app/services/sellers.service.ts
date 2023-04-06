import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataType } from 'src/data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellersService {
  isSellerlogedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}
  userSgnUp(data: dataType) {
    this.http
      .post('http://localhost:3000/seller', data, {
        observe: 'response',
      })
      .subscribe((res) => {
        this.isSellerlogedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(res.body));
        this.router.navigate(['seller-home']);
      });
  }
  userLogIN(data: dataType) {
    this.http
      .get(
        `http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
        {
          observe: 'response',
        }
      )
      .subscribe((res) => {
        if(res){
          // localStorage.setItem('seller', JSON.stringify(res.body));
          this.router.navigate(['seller-home'])
        }
        console.log('print log in data ',JSON.stringify(res.body));
      });
  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerlogedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
