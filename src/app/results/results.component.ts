import {Component, OnInit} from '@angular/core';
import {QuizDataService} from '../shared/quiz-data/quiz-data.service';
import {Question} from '../shared/model/question';
import {AuthService} from '../login/auth.service';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-results',
  templateUrl: 'results.component.html',
  styleUrls: ['results.component.css']
})
export class ResultsComponent implements OnInit {
  results: Question[];

  constructor(
    private router: Router,
    private auth: AuthService,
    private quiz: QuizDataService
  ) { }

  get quizName(): string {
    return this.quiz.quizName;
  }

  get percentCorrect(): number {
    return this.results.reduce((sum, result) => {
      return result.isCorrect ? sum + 1 : sum;
    }, 0) / this.results.length;
  }

  ngOnInit(): void {
    this.results = this.quiz.results;
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
