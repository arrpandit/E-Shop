import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http : HttpClient) { }

  adduser(data:any){
    return this.http.post("https://e-shop-by-alok.cyclic.cloud/users/signup",data,{ observe: 'response' });
  }

  getuser(data:any){ 
    return this.http.post(`https://e-shop-by-alok.cyclic.cloud/users/login`,data, {observe:'response'})
  }
  
}
