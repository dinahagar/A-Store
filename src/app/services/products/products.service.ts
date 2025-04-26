import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>("https://fakestoreapi.com/products");
  }

  getCategories() {
    return this.http.get<string[]>("https://fakestoreapi.com/products/categories");
  }

  getProductsByCategory(category: string) {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }

}
