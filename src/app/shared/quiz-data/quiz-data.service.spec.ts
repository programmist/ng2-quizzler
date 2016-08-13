/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { QuizDataService } from './quiz-data.service';

describe('Service: QuizData', () => {
  beforeEach(() => {
    addProviders([QuizDataService]);
  });

  it('should ...',
    inject([QuizDataService],
      (service: QuizDataService) => {
        expect(service).toBeTruthy();
      }));
});
