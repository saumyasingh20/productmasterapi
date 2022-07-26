import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/Product';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductmasterService {
  url:string=' http://localhost:3000/product'
  constructor(private httpClient:HttpClient) { }

  getProducts(){
    return this.httpClient.get<Product[]>(this.url);
  }

  addProduct(prod:Product){
    return this.httpClient.post<Product>(this.url, prod);
  }
}
