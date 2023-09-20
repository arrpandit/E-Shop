import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http : HttpClient) { }

  adduser(data:any){
    return this.http.post("http://localhost:3000/users",data,{ observe: 'response' });
  }

  getuser(data:any){ 
    return this.http.get(`http://localhost:3000/users?email=${data.email}&${data.password}`,{observe:'response'})
  }
}
