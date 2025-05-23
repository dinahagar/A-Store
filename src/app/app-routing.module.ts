import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
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
      },
      {
        path: 'cart', component: CartPageComponent
      }
    ]
  },
  {
    path: '**', component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
