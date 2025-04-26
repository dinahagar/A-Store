import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { userData } from '../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username:string = 'mor_2314';
  password:string = '83r5^_';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {

  }

  login(userData: userData) {
    this.loginService.login(userData).subscribe(result => {
      if(result) {
        this.router.navigateByUrl('/');
        localStorage.setItem('username', this.username)
      }
    })
  }
}
