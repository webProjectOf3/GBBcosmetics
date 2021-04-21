import { Component, Input } from '@angular/core';

@Component({
  selector: 'like-box',
  templateUrl: 'like.component.html',
  styleUrls: [ './like.component.css' ]
})
export class LikeComponent  {
  numberLikes : number = 0;
  
  likeButton() {
    this.numberLikes++;
  }
}
