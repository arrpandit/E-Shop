import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/product/products.service';
import { products } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularProducts:undefined|products[]
  constructor(private productservice:ProductsService,private route:Router) { }
  allproducts:undefined|products[];
  showsingleproductdetails = false;
  singleproductdetails:undefined|products[]=[];
  user_selected_productdetails:products[]= [];
  totalProduct_usercart = 0;

  ngOnInit(): void {
    this.productservice.getProducts().subscribe((res)=>{
      this.popularProducts = res      
    })
    this.productservice.getProducts().subscribe((res)=>{
      this.allproducts = res
    })
  }

  //product add to cart

  productAddto_cart(id:any){
    this.allproducts?.map((res:any)=>{
      if(res._id== id){
        this.user_selected_productdetails.push(res)
      }
    })
    
    console.log("user added ----------" ,this.user_selected_productdetails)    
    this.totalProduct_usercart++;
  }

  fordetails(id:any){
    this.allproducts?.map((res:any)=>{
      if(res._id== id){
        // this.user_selected_productdetails.push(res)
        this.singleproductdetails?.push(res);
      }
    })
    // this.route.
    // console.log("id----------",id)
    this.showsingleproductdetails = true
    // this.productservice.getProductbyID(id).subscribe((res:any )=>{
    //   this.singleproductdetails = res;
    //   // this.singleproductdetails = Object.entries(res);
    //   console.log("indivuisal------",this.singleproductdetails);      
    // })

    
  }

  // images = [144, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  // getallproduct(){
  //   this.productservice.getProducts().subscribe((res)=>{
  //     this.allproducts = res
  //     console.log("allproducts----",this.allproducts)
  //   })
  // }
}
