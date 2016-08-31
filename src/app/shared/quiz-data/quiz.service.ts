import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { Quiz } from '../model/quiz';
import { Question } from '../model/question';
import { Observable } from "rxjs/Observable";

@Injectable()
export class QuizService {

  quiz: Quiz;
  questions: Map<number, Question>;
  private _results: Question[] = [];

  get quizName(): string {
    return this.quiz.name;
  }

  get results(): Question[] {
    return this._results;
  }

  set results(results: Question[]) {
    this._results = results;
  }

  constructor(private angularFire: AngularFire) {}

  loadQuiz(uuid: number): Observable<Quiz> {
    return this.angularFire.database.object(`/quizzes/${uuid}`)
      .take(1)
      .map(data => new Quiz(data))
      .do(quiz => {
        this.quiz = new Quiz(quiz);
      });
  }

  getQuestion(qId: number): Observable<Question> {
    return this.angularFire.database.object(`/questions/${qId}`)
      .take(1)
      .map(data => new Question(data));
  }
}
