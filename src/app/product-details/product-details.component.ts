import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { faCirclePlus, faStar, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  productId: number = 0;
  productDetails!: Product;
  faCirclePlus= faCirclePlus;
  faCircleMinus= faCircleMinus;
  faStar= faStar;
  allDesc: boolean = false;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.productId= param['id'];
    })
    this.getProductById()
  }

  getProductById() {
    this.productsService.getProductById(this.productId).subscribe(result => {
      this.productDetails = result;
    })
  }

  getAllDesc() {
    this.allDesc= !this.allDesc;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  getQuantity(product: any): number {
    return this.cartService.getCart().find(p => p.id === product.id)?.quantity || 0;
  }

}
