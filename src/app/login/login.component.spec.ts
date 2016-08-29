/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import {async} from "@angular/core/testing/async";
import {Router} from "@angular/router";

import { LoginComponent } from './login.component';
import {AuthService} from "../auth/auth.service";

class MockRouter {
  navigate = jasmine.createSpy("navigate");
  navigateByUrl = jasmine.createSpy("navigateByUrl");
}

class MockAuthService {
  static authorized: boolean = false;
  login(email: string, password: string) {
    return MockAuthService.authorized;
  }
  logout() {
    MockAuthService.authorized = false;
  }
};

let mockRouter = new MockRouter();

describe('Component: Login', () => {
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        {provide: AuthService, useClass: MockAuthService},
        {provide: Router, useValue: mockRouter},
      ]
    }).compileComponents().catch((e) => console.error(e));
    MockAuthService.authorized = false;
  });

  describe('When initialized', () => {
    it('should create an instance', async(() => {
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(LoginComponent);
        fixture.detectChanges();
        let loginSvc = fixture.debugElement.injector.get(LoginComponent);
        expect(loginSvc).toBeTruthy();
      });
    }));
  });

  describe('When a user logs in', () => {
    describe('and uses the correct credentials ', () => {
      it('should navigate to the quiz', async(() => {
        TestBed.compileComponents().then(() => {
          mockRouter.navigateByUrl.calls.reset();
          fixture = TestBed.createComponent(LoginComponent);
          fixture.detectChanges();
          let loginSvc = fixture.debugElement.injector.get(LoginComponent);
          MockAuthService.authorized = true;
          loginSvc.login('a@b.com', 'xxxxx');
          expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('quiz');
        });
      }));
    });

    describe('and uses the wrong credentials ', () => {
      it('login should remain at the login page', async(() => {
        TestBed.compileComponents().then(() => {
          mockRouter.navigateByUrl.calls.reset();
          fixture = TestBed.createComponent(LoginComponent);
          fixture.detectChanges();
          let loginSvc = fixture.debugElement.injector.get(LoginComponent);
          MockAuthService.authorized = false;
          loginSvc.login('a@b.com', 'xxxxx');
          expect(mockRouter.navigateByUrl).not.toHaveBeenCalled();
        });
      }));
    });
  });
});
