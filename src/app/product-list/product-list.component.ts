import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Http.service';
import { Product } from '../product';
import { Response } from '@angular/http';
import { routerTransition } from '../routerTransition';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[HttpService],
  animations:[routerTransition()],
  host: {'[@routerTransition]': ''}
})

export class ProductListComponent implements OnInit {
  //contain the response
  productsList;
  
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.http.getProducts()
    .subscribe((res:any)=>this.productsList=res);
  }

}
