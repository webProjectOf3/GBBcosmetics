import { Component, OnInit } from '@angular/core';
import { products3 } from '../products'
@Component({
  selector: 'app-product-list3',
  templateUrl: './product-list3.component.html',
  styleUrls: ['./product-list3.component.css']
})
export class ProductList3Component {
  products = products3;
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  remove(index: number){
     products3.splice(index - 1, 1,)
   }
}