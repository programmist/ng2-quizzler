import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {QuizDataService} from "./quiz-data.service";
import {QuizComponent} from "./quiz.component";
import {quizRouting} from "./quiz.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    quizRouting
  ],
  declarations: [
    QuizComponent
  ],
  providers: [
    QuizDataService
  ]
})
export class QuizModule {}
