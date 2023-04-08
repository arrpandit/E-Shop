import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { products } from 'src/data-type';

import { faTrash ,faPenSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productList : undefined|products[]
  icon = faTrash ;
  editIcon = faPenSquare

  constructor(private productservice:ProductsService) { }

  ngOnInit(): void {
    this.list()
  }
  deleteProduct(id:number){
    this.productservice.deleteProduct(id).subscribe((res)=>{
      console.log("deleted----",res)
      this.list()
    })

  }
  list(){
    this.productservice.productList().subscribe((res)=>{
      console.table(res)
      this.productList=res
    })
  }



}
