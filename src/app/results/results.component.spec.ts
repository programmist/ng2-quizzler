/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultsComponent } from './results.component';
import { QuizService } from "../shared/quiz-data/quiz.service";
import { MockQuizDataService } from "../shared/quiz-data/test/mock-quiz-data.service";

describe('Component: Results', () => {
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsComponent],
      providers: [
        {provide: QuizService, useClass: MockQuizDataService}
      ]
    });
  });

  it('should create an instance', () => {
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(ResultsComponent);
      let resultsComp = fixture.debugElement.injector.get(ResultsComponent);
      expect(resultsComp).toBeTruthy();
    });
  });
});
