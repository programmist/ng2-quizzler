import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing }        from './app.routes';

import { AppComponent }   from './app.component';
import {AuthService} from "./login/auth.service";
import {QuizDataService} from "./quiz/quiz-data.service";
import {LoginComponent} from "./login/login.component";
import {QuizComponent} from "./quiz/quiz.component";
import {QuestionComponent} from "./question/question.component";
import {ResultsComponent} from "./results/results.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    QuizComponent,
    QuestionComponent,
    ResultsComponent
  ],
  providers: [
    AuthService,
    QuizDataService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
