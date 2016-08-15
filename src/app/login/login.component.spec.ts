/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {AuthService} from "./auth.service";
import {async} from "@angular/core/testing/async";

class MockAuthService {
  static authorized: boolean = false;
  login(email: string, password: string) {
    MockAuthService.authorized = true;
  }
  logout() {
    MockAuthService.authorized = false;
  }
};

describe('Component: Login', () => {
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        {provide: AuthService, useValue: new MockAuthService()}
      ]
    }).compileComponents();
    MockAuthService.authorized = false;
  });

  it('should create an instance', () => {
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(LoginComponent);
      let loginSvc = fixture.debugElement.injector.get(LoginComponent);
      expect(loginSvc).toBeTruthy();
    });
  });

  // TODO: Probably better as e2e tests
  describe('When a user logs in', () => {
    beforeEach(() => {
      TestBed.compileComponents();
    });

    describe('and uses the correct credentials ', () => {
      it('should navigate to the quiz', () => {
        TestBed.compileComponents().then(() => {
          let loginSvc = fixture.debugElement.injector.get(LoginComponent);
          MockAuthService.authorized = true;
          loginSvc.login('a@b.com', 'xxxxx');
          // TODO: detect route change to quiz
        });
      });
    });

    describe('and uses the wrong credentials ', () => {
      it('login should remain at the login page', () => {
        TestBed.compileComponents().then(() => {
          let loginSvc = fixture.debugElement.injector.get(LoginComponent);
          MockAuthService.authorized = true;
          loginSvc.login('a@b.com', 'xxxxx');
          // TODO: route should not change
        });
      });
    });
  });
});
