import {Component, OnInit} from '@angular/core';
import {users} from '../users';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{
  user = 'login';
  // name(): void{
  //   if (users.some(e => e.logged === true)){
  //     this.user = 'logged';
  //   }}
  //
  ngOnInit() {
    if (users.some(e => e.logged === true)) {
      this.user = 'logged';
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
