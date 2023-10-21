import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    // let productid = this.route.snapshot.paramMap.get('id');
    console.log("product is---------",productId);
    
  }

}
