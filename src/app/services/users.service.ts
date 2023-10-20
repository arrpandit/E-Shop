import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http : HttpClient) { }

  adduser(data:any){
    return this.http.post("http://localhost:5000/users/signup",data,{ observe: 'response' });
  }

  getuser(data:any){ 
    return this.http.post(`http://localhost:5000/users/login`,data, {observe:'response'})
  }
}
