import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();

  constructor() { }

  getCart() {
    return this.cart.getValue();
  }

  addToCart(product: Product) {
    const existing = this.getCart().find(item => item.id === product.id);

    if (existing) {
      existing.quantity = (existing.quantity || 0) + 1;
      this.cart.next([...this.getCart()]);
    } else {
      const productWithQuantity = {...product, quantity: 1};
      this.cart.next([...this.getCart(), productWithQuantity]);
    }
  }

}
