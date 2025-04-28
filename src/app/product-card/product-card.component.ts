import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { faCircleInfo, faCirclePlus, faStar, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

  faCirclePlus= faCirclePlus;
  faCircleInfo= faCircleInfo;
  faStar= faStar;
  faCircleMinus= faCircleMinus;
  cartItems: Product[] = [];

  @Input() public products: Product[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    // this.router.navigate(['/cart']);
  }

  getQuantity(product: any): number {
    return this.cartService.getCart().find(p => p.id === product.id)?.quantity || 0;
  }
}
