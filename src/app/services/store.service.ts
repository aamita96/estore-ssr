import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';
import { Observable } from 'rxjs';

const URL = 'https://fakestoreapi.com/products/';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(URL);
  }

  getProductById(productId: number) {
    return this.http.get<Product>(URL + productId);
  }

  addNewProduct(newProudctInfo: Product): Observable<Product> {
    return this.http.post<Product>(URL, newProudctInfo);
  }

  updateProduct(id: number | string, product: Partial<Product>) {
    return this.http.put<Product>(URL + id, product);
  }

  deleteProduct(productId: number): Observable<Product> {
    return this.http.delete<Product>(URL + productId);
  }
}
