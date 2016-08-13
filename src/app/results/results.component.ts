import { Component, OnInit } from '@angular/core';
import {QuizDataService} from "../shared/quiz-data/quiz-data.service";
import {Question} from "../shared/model/question";

@Component({
  moduleId: module.id,
  selector: 'app-results',
  templateUrl: 'results.component.html',
  styleUrls: ['results.component.css']
})
export class ResultsComponent implements OnInit {
  results: Question[];

  get quizName() {
    return this.quiz.quizName;
  }

  constructor(
    private quiz: QuizDataService
  ) { }

  ngOnInit() {
    this.results = this.quiz.results;
  }
}
