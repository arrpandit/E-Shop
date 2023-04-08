import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signup, login } from 'src/data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellersService {
  isSellerlogedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}
  userSgnUp(data: signup) {
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
  userLogIN(data: login) {
    this.http
      .get(
        `http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
        {
          observe: 'response',
        }
      )
      .subscribe((res: any) => {
        if (res && res.body && res.body.length) {
          this.router.navigate(['seller-home']);
          localStorage.setItem('seller', JSON.stringify(res.body));
        } else {
          this.isLoginError.emit(true);
          // console.log('credential incorrect ', res.body);
        }
      });
  }
  
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerlogedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  
}
