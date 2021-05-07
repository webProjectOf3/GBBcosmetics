import {Component, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import {ProductService} from './../services/product.service';
import {Product} from './../models';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  share(): void {
    window.alert('The product has been shared!');
  }
  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }
  remove(index: number): void{
    products.splice(index - 1, 1);
  }


  ngOnInit(): void{
    this.getProducts();
  }

  getProducts(): void{
    const id = +this.route.snapshot.paramMap.get('categoryId');
    const a = this.productService.getProducts(id);
    a.subscribe( res => {this.products = res; });
  }


  // getCategory() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.categoryDetailedService.getCategory(id).subscribe(category => {
  //     this.category = category;
  //     console.log(this.category);
  //     });
  // }
// Number(routeParams.get('categoryId'))

  // ngOnInit(): void {
  //   this.getCategories();
  // }
  //
  //
  // getCategories(): void{
  //   const a = this.categoryService.getCategories();
  //   a.subscribe( res => {this.categories = res;});
  // }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
