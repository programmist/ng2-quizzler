import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }    from '@angular/forms';

import { QuizService } from '../shared/quiz-data/quiz.service';
import { QuizComponent } from './quiz.component';
import { quizRouting } from './quiz.routing';
import { QuestionComponent } from "./question/question.component";


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
    QuizService
  ]
})
export class QuizModule {}
