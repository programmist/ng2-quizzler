/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import {async} from "@angular/core/testing/async";

import {QuizComponent} from "./quiz.component";
import {QuizDataService} from "../shared/quiz-data/quiz-data.service";
import {MockQuizDataService} from "../shared/quiz-data/test/mock-quiz-data.service";
import {RouterModule} from "@angular/router";

describe('Component: Quiz', () => {
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizComponent],
      providers: [
        RouterModule,
        {provide: QuizDataService, useClass: MockQuizDataService}
      ]
    }).compileComponents();
  });

  describe('On Initialization', () => {
    beforeEach(() => {
      TestBed.compileComponents();
    });

    it('should create an instance', () => {
      TestBed.compileComponents().then(() => {
        let quizComp = fixture.debugElement.injector.get(QuizComponent);
        expect(quizComp).toBeTruthy();
      });
    });

    it('should load first question', () => {
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(QuizComponent);
        let quizComp = fixture.debugElement.injector.get(QuizComponent);
        expect(quizComp.currentQuestion.question).toBe('Question 1');
      });
    });
  });
});
