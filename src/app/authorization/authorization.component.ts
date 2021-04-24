import { Component, OnInit } from '@angular/core';
import {users} from '../users';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  username = '';
  password = '';
  logged = false;

  constructor(private router: Router) { }

  ngOnInit(): void{}

  auth(): void {
    if (this.username !== '' && this.password !== '') {
        if (users.some(e => e.username === this.username) && users.some(e => e.password === this.password)) {
          this.logged = true;
          this.router.navigate(['/']);
          window.alert('Access');
        }
        else{
          window.alert('Incorrect password');
        }

  }}

  /*logout(){
      this.logged = false;
    })
  }*/

}

