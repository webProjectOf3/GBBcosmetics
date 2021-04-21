import { Component, OnInit } from '@angular/core';
import { products2 } from '../products'
@Component({
  selector: 'app-product-list2',
  templateUrl: './product-list2.component.html',
  styleUrls: ['./product-list2.component.css']
})
export class ProductList2Component {
  products = products2;
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  remove(index: number){
     products2.splice(index - 1, 1,)
   }
}
