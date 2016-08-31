/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { QuizService } from './quiz.service';
import {TestBed} from "@angular/core/testing/test_bed";
import {HttpModule} from "@angular/http";

describe('Service: QuizData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [QuizService]
    });
  });

  it('should ...',
    inject([QuizService],
      (service: QuizService) => {
        expect(service).toBeTruthy();
      }));
});
