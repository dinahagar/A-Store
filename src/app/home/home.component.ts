import { Component, HostListener } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public isOpen!:boolean;
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setSidebarState();
  }

  setSidebarState() {
    this.isOpen = window.innerWidth >= 768;
  }

  ngOnInit() {
    this.setSidebarState();
    this.getProducts();
  }

  handleSidebarToggle(newState: boolean) {
    this.isOpen = newState;
  }

  getProducts() {
    this.productsService.getProducts().subscribe((result: Product[]) => {
      console.log(result);
      this.products = result;
    })
  }
}
