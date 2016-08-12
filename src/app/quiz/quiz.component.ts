import { Component, OnInit } from '@angular/core';

import { QuestionComponent } from '../question/question.component';
import { Question } from "./model/question";
import {QuizDataService} from "./quiz-data.service";


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
  lastQuestion: boolean = false;
  currentQuestion: Question;

  get quizName() {
    return this.quiz.quizName;
  }

  constructor(
    private quiz: QuizDataService
  ) { }

  getNextQuestion() {
    this.currentQuestion = this.quiz.getQuestion(this.currentIndex);
    this.lastQuestion = (this.currentIndex === this.quiz.questionCount);
    if (!this.lastQuestion) this.currentIndex++;
  }

  ngOnInit() {
    this.quiz.loadQuiz(1).then(() => {
      this.getNextQuestion();
      this.quizLoaded = true;
    });
  }
}
