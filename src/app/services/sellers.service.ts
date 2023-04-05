import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { dataType } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class SellersService {

  constructor(private http : HttpClient) { }
  userSgnUp(data:dataType){
    // console.log("services called----")
    return this.http.post("http://localhost:3000/seller",data)

  }
}
