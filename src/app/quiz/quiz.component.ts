import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../question/question.component';

@Component({
  moduleId: module.id,
  selector: 'app-quiz',
  templateUrl: 'quiz.component.html',
  styleUrls: ['quiz.component.css'],
  directives: [QuestionComponent]
})
export class QuizComponent implements OnInit {

  title = "Quiz";

  constructor() { }

  ngOnInit() {
  }

}
