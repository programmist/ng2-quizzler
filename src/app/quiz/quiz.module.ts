import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }    from '@angular/forms';

import {QuizDataService} from '../shared/quiz-data/quiz-data.service';
import {QuizComponent} from './quiz.component';
import {quizRouting} from './quiz.routing';
import {QuestionComponent} from "./question/question.component";


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    quizRouting
  ],
  declarations: [
    QuizComponent,
    QuestionComponent
  ],
  providers: [
    QuizDataService
  ]
})
export class QuizModule {}
