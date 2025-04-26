import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: '' , component: LayoutComponent, children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'category/:category', component: CategoryProductsComponent
      },
      {
        path: 'products/:id', component: ProductDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
