import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  title = 'Login';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  get user() { return this.authService.auth; }

  login(email: string, password: string): void {
    this.authService.login(email, password).then(() => {
      const url = this.authService.redirectUrl || '/quiz';
      this.router.navigate([url]);
    });
  }

  logout() {
    this.authService.logout();
  }
}
