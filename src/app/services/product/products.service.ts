import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from '../../data-type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  
  //from backend
  addproducts(data:products){
    return this.http.post('http://localhost:5000/products',data);
  }

  //from backend
  getProducts(){
    return this.http.get<products[]>('http://localhost:5000/products')
  }

  deleteProducts(id:string){
    return this.http.delete(`http://localhost:5000/products/${id}`);
  }

  //will check with backend
  updateProduct(id:any,data:products){
    // return this.http.pu/t
    return this.http.put<products>(`http://localhost:5000/products/${id}`,data);
  }
  getProductbyID(id:string){
    // return this.http.pu/t
    return this.http.get(`http://localhost:5000/products/${id}`);
    // return this.http.get(`http://localhost:3000/products/6309a4a7248336af89f4b397`);
  }

  getpopulrProduct(){
    return this.http.get<products[]>('http://localhost:3000/products?_limit=4')
  }

  getAllFakeProductToAdd(){
    return this.http.get<products[]>('http://localhost:5000/products')    
  }
  searchProduct(query:string){
    return this.http.get<products[]>(`http://localhost:5000/products/search/${query}`) 
  }

}
