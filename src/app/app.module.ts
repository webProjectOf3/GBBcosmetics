import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { CategoryComponent } from './category/category.component';
import { ProductList2Component } from './product-list2/product-list2.component';
import { ProductList3Component } from './product-list3/product-list3.component';
import { ProductList4Component } from './product-list4/product-list4.component';
import { ProductDetails2Component } from './product-details2/product-details2.component';
import { ProductDetails3Component } from './product-details3/product-details3.component';
import { ProductDetails4Component } from './product-details4/product-details4.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CategoryComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-list2', component: ProductList2Component },
      { path: 'product-list3', component: ProductList3Component },
      { path: 'product-list4', component: ProductList4Component },
      { path: 'products2/:productId', component: ProductDetails2Component },
      { path: 'products3/:productId', component: ProductDetails3Component },
      { path: 'products4/:productId', component: ProductDetails4Component },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    CategoryComponent,
    ProductList2Component,
    ProductList3Component,
    ProductList4Component,
    ProductDetails2Component,
    ProductDetails3Component,
    ProductDetails4Component,
    LikeComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/