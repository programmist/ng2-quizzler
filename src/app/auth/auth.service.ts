import { Injectable } from '@angular/core';
import { AngularFire, AngularFireAuth, FirebaseAuthState } from "angularfire2";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;
  redirectUrl: string;

  get auth(): AngularFireAuth { return this.angularFire.auth }

  get isLoggedIn(): Observable<boolean> {
    return this.angularFire.auth
      .take(1)
      .map(user => {
        return user != null;
      });
  }

  constructor(private angularFire: AngularFire) {
    this.angularFire.auth.subscribe(
      (authState) => {
        this.authState = authState;
      },
      error => console.error
    );
  }

  login(email: string, password: string) {
    return this.angularFire.auth.login({ email: email, password: password });
  }

  logout(): void {
    this.angularFire.auth.logout();
  }
}
