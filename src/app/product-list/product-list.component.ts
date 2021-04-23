import {Component, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;
  constructor(
    private route: ActivatedRoute
  ) { }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  remove(index: number){
    products.splice(index - 1, 1);
  }


  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const categoryNameFromRoute = Number(routeParams.get('categoryName'));
    this.products = products.filter(i => i.category === categoryNameFromRoute);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
