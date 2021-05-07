import { Component, OnInit } from '@angular/core';
import {users} from '../users';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  username = '';
  password = '';
  logged = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void{}

  auth(username , password): void {
    if (this.authService.login(username , password)) {
        window.alert('Access');
    }
    else{
      window.alert('Incorrect password');
    }

  }

  /*logout(){
      this.logged = false;
    })
  }*/

}

