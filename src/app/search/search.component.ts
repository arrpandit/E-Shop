import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    let query =this.activatedroute.snapshot.paramMap.get('query')
    console.log("sbhajs",query)

  }

}
