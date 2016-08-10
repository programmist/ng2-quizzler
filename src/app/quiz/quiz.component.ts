import { Component, OnInit } from '@angular/core';
import {Http, Headers, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import { QuestionComponent } from '../question/question.component';

@Component({
  moduleId: module.id,
  selector: 'app-quiz',
  templateUrl: 'quiz.component.html',
  styleUrls: ['quiz.component.css'],
  directives: [QuestionComponent]
})
export class QuizComponent implements OnInit {
  quiz: Quiz;
  currentIndex: number = 0;
  lastQuestion: boolean = false;
  currentQuestion: Question;

  constructor(private http: Http) { }

  getNextQuestion() {
    this.currentQuestion = this.quiz.questions[this.currentIndex];
    this.lastQuestion = (this.currentIndex === this.quiz.questions.length - 1);
    if (!this.lastQuestion) this.currentIndex++;
  }

  ngOnInit() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    this.http
      .get('/assets/quiz_1.json', {headers: headers})
      .map((r: Response) => r.json() as Quiz)
      .subscribe(
        data => {
          this.quiz = data;
          this.getNextQuestion();
        },
        err => console.error(err),
        () => console.log('quiz retrieved')
      )
  }
}

export class Question {
  question: string;
  details: string;
  choices: string[];
  answer: string;
}

export class Quiz {
  uid: number;
  name: string;
  questions: Question[];
}
