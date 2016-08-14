import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionComponent } from './question/question.component';
import { Question } from '../shared/model/question';
import {QuizDataService} from '../shared/quiz-data/quiz-data.service';


@Component({
  moduleId: module.id,
  selector: 'app-quiz',
  templateUrl: 'quiz.component.html',
  styleUrls: ['quiz.component.css'],
  directives: [QuestionComponent]
})
export class QuizComponent implements OnInit {
  quizLoaded: boolean = false;
  currentIndex: number = 1;
  currentQuestion: Question;

  get quizName(): string {
    return this.quiz.quizName;
  }

  get lastQuestion(): boolean {
    return this.currentIndex === this.quiz.questionCount;
  }

  get firstQuestion(): boolean {
    return this.currentIndex === 1;
  }

  constructor(
    private router: Router,
    private quiz: QuizDataService
  ) { }

  nextQuestion(): void {
    this.currentIndex++;
    this.currentQuestion = this.quiz.getQuestion(this.currentIndex);
  }

  previousQuestion(): void {
    this.currentIndex--;
    this.currentQuestion = this.quiz.getQuestion(this.currentIndex);
  }

  submit(): void {
    this.router.navigateByUrl('/results');
  }

  ngOnInit(): void {
    this.quiz.loadQuiz(1).then(() => {
      this.currentQuestion = this.quiz.getQuestion(this.currentIndex);
      this.quizLoaded = true;
    });
  }
}
