import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionComponent } from './question/question.component';
import { Question } from '../shared/model/question';
import { QuizService } from '../shared/quiz-data/quiz.service';
import { Quiz } from "../shared/model/quiz";
import 'rxjs/add/operator/do';


@Component({
  moduleId: module.id,
  selector: 'app-quiz',
  templateUrl: 'quiz.component.html',
  styleUrls: ['quiz.component.css'],
  directives: [QuestionComponent]
})
export class QuizComponent implements OnInit {
  currentIndex: number = 0;
  quiz: Quiz;
  currentQuestion: Question;
  results: Question[] = [];

  constructor(
    private router: Router,
    private quizService: QuizService
  ) { }

  get lastQuestion(): boolean {
    return this.currentIndex === this.quiz.questions.length;
  }

  nextQuestion(): void {
    this.currentIndex++;
    this.quizService.getQuestion(this.currentIndex)
      .subscribe(question => {
        this.results.push(question);
        this.currentQuestion = question;
      });
  }

  submit(): void {
    this.quizService.results = this.results.reverse();
    this.router.navigate(['results']);
  }

  ngOnInit(): void {
    let subscription = this.quizService.loadQuiz(1)
      .subscribe(quiz => {
        this.quiz = quiz;
        this.nextQuestion();
        subscription.unsubscribe();
      });
  }
}
