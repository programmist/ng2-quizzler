import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { routing }        from './app.routes';

import { AppComponent }   from './app.component';
import {QuizDataService}  from "./shared/quiz-data/quiz-data.service";

import {QuizModule}       from "./quiz/quiz.module";
import {ResultsModule}    from "./results/results.module";
import {LoginModule}      from "./login/login.module";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    QuizModule,
    ResultsModule,
    LoginModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    QuizDataService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
