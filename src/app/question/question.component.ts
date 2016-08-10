import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'qz-question',
  templateUrl: 'question.component.html',
  styleUrls: ['question.component.css']
})
export class QuestionComponent implements OnInit {

  title = "Question";

  constructor() { }

  ngOnInit() {
  }

}
