import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products/products.service';
import { Product } from '../models/product';
import { SearchService } from '../services/search/search.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit{

  categoryProducts: Product[] = [];
  category: string = '';

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private searchService: SearchService) {}

  ngOnInit(): void {
    this.getProductsByCategory();
  }

  getProductsByCategory() {
    this.route.params.subscribe(param => {
      this.searchService.searchTerm$.subscribe(term => {
        this.productsService.getProductsByCategory(param['category']).subscribe(result => {
          if(term !== '') {
            this.categoryProducts = result.filter(item => item.title.toLowerCase().includes(term.toLowerCase()));
          }else {
            this.categoryProducts = result;
          }
        })
      })
    })
  }
}
