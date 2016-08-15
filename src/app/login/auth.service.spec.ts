/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import {TestBed} from "@angular/core/testing/test_bed";

describe('Service: Auth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should ...',
    inject([AuthService],
      (service: AuthService) => {
        expect(service).toBeTruthy();
      }));
});
