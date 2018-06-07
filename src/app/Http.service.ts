import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Product } from './product';

const HttpUrl='http://localhost:3000';
const Headers=new HttpHeaders();
Headers.append('Content-Type','application/json');

@Injectable()
export class HttpService {

  constructor(private http:HttpClient) { }

  getProducts()
  {
    return this.http.get(HttpUrl+'/products/');
  }

  getOrders()
  {
    return this.http.get(HttpUrl+'/orders/');
  }

  postProducts(product:Product)
  {
    this.http.post(HttpUrl+'/products/',{})
  }

  userSignUp(user)
  {
    return this.http.post(HttpUrl+'/users/signup/',user,{headers:Headers});
  }

  userLogIn(user)
  {
    return this.http.post(HttpUrl+'/users/login/',user,{headers:Headers});
  }
}
