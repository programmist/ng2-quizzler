import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "./auth.service";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Login";

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  login(email: string, password: string) {
    if (this.auth.login(email, password)) {
      this.router.navigateByUrl('quiz');
    } else {
      // TODO: Failed login
    }
  }

  ngOnInit() {
  }

}
