import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  addproducts(data:any){
    return this.http.post('http://localhost:3000/products',data);
  }

  getProducts(){
    return this.http.get('http://localhost:3000/products', {observe: 'response'})
  }


}
