import { Component, Input, OnInit } from '@angular/core';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  categories: string[] = [];

  faAnglesRight = faAnglesRight;
  @Input() isOpen!: boolean;

  constructor(private productsServices: ProductsService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.productsServices.getCategories().subscribe((result) => {
      this.categories = result;
    })
  }

}
