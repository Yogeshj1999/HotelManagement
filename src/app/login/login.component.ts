import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private route :Router) { }

  email: string = '';
  password: string = '';
  login() {
    if(this.email === ' ' && this.password === 'admin') {
      this.route.navigate(['/rooms','add']);
    }
  }
}
