import {Component, OnInit, Input} from '@angular/core';
import {Question} from "../quiz/model/question";

@Component({
  moduleId: module.id,
  selector: 'qz-question',
  templateUrl: 'question.component.html',
  styleUrls: ['question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }
}
