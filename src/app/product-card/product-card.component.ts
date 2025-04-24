import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { faCircleInfo, faCirclePlus, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

  faCirclePlus= faCirclePlus;
  faCircleInfo= faCircleInfo;
  faStar= faStar;

  @Input() public products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}
