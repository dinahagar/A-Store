import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart/cart.service';
import { faTrash, faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{

  cartItems: Product[] = [];
  faTrash = faTrash;
  faCirclePlus = faCirclePlus;
  faCircleMinus = faCircleMinus;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.totalQuantity = this.cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
