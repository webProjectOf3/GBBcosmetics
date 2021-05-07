import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AuthorizationComponent} from './authorization/authorization.component';

const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'categories', component: CategoryComponent },
      { path: 'about', component: AboutComponent },
      { path: 'categories/:categoryId', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'auth', component: AuthorizationComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
