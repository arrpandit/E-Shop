import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/product/products.service';
import { products } from '../../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  productsAddedMsg:string="";
  msgremove:boolean = false
  constructor(private productsService:ProductsService) { }
  fakeproduct:undefined|products[]


  ngOnInit(): void {
    this.productsService.getAllFakeProductToAdd().subscribe((res)=>{
      this.fakeproduct = res;
      console.log("fake products--------",this.fakeproduct)
    })
  }

  addProducts(data:products){
    //1>if you click without proving detials its added the details (TBD)need to see
    //2>after product added form need to make blank by refresh the page
    //3> product name need to show next line in box if size increases-----------
    if(data){
      this.productsService.addproducts(data).subscribe((val)=>{
        if(val){
          this.productsAddedMsg = "Producets Added";
          this.msgremove=true;
        }
      }); 
      
    }
    
    
    setTimeout(()=>{
      this.msgremove = false
      this.productsAddedMsg = ""
    },2000)
    
  }

  productAddingWay = true;

  manually(){
    this.productAddingWay = true
  }

  automatically(){
    this.productAddingWay = false;
  }

  

  addproduct(item:any){
    this.productsService.addproducts(item).subscribe((res)=>{
      if(res){
        console.log("products---added---");
        
      }
    })

  }




}
