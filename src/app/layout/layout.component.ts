import { Component, HostListener } from '@angular/core';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  public isOpen!:boolean;

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
  }

  handleSidebarToggle(newState: boolean) {
    this.isOpen = newState;
  }

}
