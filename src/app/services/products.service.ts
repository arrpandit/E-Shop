import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { products } from 'src/data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  isProductAddes = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  // Products//
  // addProduct(data: products) {  //1
  //   this.http
  //     .post('http://localhost:3000/products', data, { observe: 'response' })
  //     .subscribe((res) => {
  //       this.isProductAddes.next(true);
  //       console.log('productes ass', res);
  //     });
  // }

  addProduct(data: products) {  //2
    return this.http.post('http://localhost:3000/products', data);
  }

  productList(){
    return this.http.get<products[]>('http://localhost:3000/products')
  }

  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }

  getProductByID(id:any){
    return this.http.get<products>(`http://localhost:3000/products/${id}`)
  }

  updateProduct(data:products){
    return this.http.put(`http://localhost:3000/products/${data.id}`,data)
  }





}
