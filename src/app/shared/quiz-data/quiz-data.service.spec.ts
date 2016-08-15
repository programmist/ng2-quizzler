/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { QuizDataService } from './quiz-data.service';
import {TestBed} from "@angular/core/testing/test_bed";
import {HttpModule} from "@angular/http";

describe('Service: QuizData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [QuizDataService]
    });
  });

  it('should ...',
    inject([QuizDataService],
      (service: QuizDataService) => {
        expect(service).toBeTruthy();
      }));
});
