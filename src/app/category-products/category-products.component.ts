import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit{

  categoryProducts: Product[] = [];
  category: string = '';

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProductsByCategory();
  }

  getProductsByCategory() {
    this.route.params.subscribe(param => {
      this.productsService.getProductsByCategory(param['category']).subscribe(result => {
        this.categoryProducts = result;
      })
    })
  }
}
