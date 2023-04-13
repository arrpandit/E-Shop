import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { userSigneup, userlogin } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private router:Router,private http:HttpClient) { }

  userauthreload()
  {
    if(localStorage.getItem('user')){
      this.router.navigate(['/'])
    }
  }

  userSignup(data:userSigneup){
    return this.http.post('http://localhost:3000/user',data ,{
      observe: 'response',
    })
  }
  userlogin(data:userlogin){
    return this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{
      observe: 'response',
    })
  }
}
