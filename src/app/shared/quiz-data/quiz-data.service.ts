import { Injectable } from '@angular/core';
import {Http, Headers, Response } from '@angular/http';
import {Quiz} from '../model/quiz';
import {Question} from '../model/question';

@Injectable()
export class QuizDataService {
  private quiz: Quiz;
  private questions: Map<number, Question>;

  get quizloaded(): boolean {
    return this.quiz != null;
  }

  get questionCount(): number {
    return this.questions.size;
  }

  get quizName(): string {
    return this.quiz.name;
  }

  get results(): Question[] {
    return this.quiz.questions.slice(0);
  }

  constructor(private http: Http) { }

  loadQuiz(uuid: number): Promise<void> {
    let resolver;
    const finished: Promise<void> = new Promise<void>((resolve, reject) => {
      resolver = resolve;
    });

    let headers = new Headers();
    headers.append('Accept', 'application/json');
    this.http
      .get(`/assets/quiz_${uuid}.json`, {headers: headers})
      .map((r: Response) => new Quiz(r.json()))
      .subscribe(
        data => {
          this.quiz = data;
          this.questions = this.quiz.questions.reduce((map, question, i) => {
            map.set(i + 1, question);
            return map;
          }, new Map()) as Map<number, Question>;
          resolver();
        },
        err => console.error(err),
        () => console.log('quiz retrieved')
      );
    return finished;
  }

  getQuestion(qNumber: number): Question {
    return this.questions.get(qNumber);
  }
}
