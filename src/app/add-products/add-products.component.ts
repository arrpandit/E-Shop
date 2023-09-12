import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  productsAddedMsg:string="";
  msgremove:boolean = false
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }
  
  addProducts(data:object){
    //if you click without proving detials its added the details (TBD)need to see
    if(data){
      this.productsService.addproducts(data).subscribe((val)=>{
        if(val){
          this.productsAddedMsg = "Producets Added";
          this.msgremove=true;
          console.log("producst added---",val)
        }
      }); 
      
    }
    setTimeout(()=>{
      this.msgremove = false
      this.productsAddedMsg = ""
    },2000)
    
  }
}
