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
  currentIndex: number = 1;

  constructor(
    private router: Router,
    private quiz: QuizDataService
  ) { }

  get quizLoaded(): boolean {
    return this.quiz.quizloaded;
  }

  get currentQuestion(): Question {
    return this.quiz.getQuestion(this.currentIndex);
  }

  get quizName(): string {
    return this.quiz.quizName;
  }

  get lastQuestion(): boolean {
    return this.currentIndex === this.quiz.questionCount;
  }

  get firstQuestion(): boolean {
    return this.currentIndex === 1;
  }

  nextQuestion(): void {
    this.currentIndex++;
  }

  previousQuestion(): void {
    this.currentIndex--;
  }

  submit(): void {
    this.router.navigateByUrl('/results');
  }

  ngOnInit(): void {
    this.quiz.loadQuiz(1).then(() => {
    });
  }
}
