import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login(email: string, password: string): boolean {
    // TODO: implement auth logic.
    return true;
  }

  logout(): void {
    // TODO: Log out
    console.log('LOGOUT');
  }

}
