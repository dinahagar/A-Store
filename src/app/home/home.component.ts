import { Component, HostListener, OnInit } from '@angular/core';
import { ProductsService } from '../services/products/products.service';
import { Product } from '../models/product';
import { SearchService } from '../services/search/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  products: Product[] = [];
  searchTerm:string = '';

  constructor(private productsService: ProductsService, private searchService: SearchService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.searchService.searchTerm$.subscribe(term => {
      this.productsService.getProducts().subscribe((result: Product[]) => {
        if(term !== '') {
          this.products = result.filter(item => item.title.toLowerCase().includes(term.toLowerCase()));
        }else {
          this.products = result;
        }
      })
    })
  }
}
