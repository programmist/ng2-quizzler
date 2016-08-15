import {Component, Input} from '@angular/core';
import {Question} from '../../shared/model/question';


@Component({
  moduleId: module.id,
  selector: 'qz-question',
  templateUrl: 'question.component.html',
  styleUrls: ['question.component.css']
})
export class QuestionComponent {
  @Input() question: Question;
}
