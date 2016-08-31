import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz-data/quiz.service';
import { Question } from '../shared/model/question';
import { AuthService } from '../auth/auth.service';
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: 'results.component.html',
  styleUrls: ['results.component.css']
})
export class ResultsComponent implements OnInit {
  results: Question[];

  constructor(
    private router: Router,
    private auth: AuthService,
    private quizService: QuizService
  ) { }

  get quizName(): string {
    return this.quizService.quizName;
  }

  get percentCorrect(): number {
    return this.results.reduce((sum, result) => {
      return result.isCorrect ? sum + 1 : sum;
    }, 0) / this.results.length;
  }

  ngOnInit(): void {
    this.results = this.quizService.results;
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
