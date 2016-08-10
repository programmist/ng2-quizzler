import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Login";

  constructor(private router: Router) { }

  // TODO: Implement actual login. For now, just route to quiz.
  login() {
    this.router.navigateByUrl('/quiz');
  }

  ngOnInit() {
  }

}
