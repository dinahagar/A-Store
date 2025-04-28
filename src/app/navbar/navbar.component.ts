import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../models/product';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isLang:boolean = false;
  faCartShopping = faCartShopping;
  @Input() public isOpen!: boolean;
  @Output() isOpenChange = new EventEmitter<boolean>();
  username: string = localStorage.getItem('username') || '';
  totalQuantity: number = 0;

  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.totalQuantity = this.cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
    })
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }
}
