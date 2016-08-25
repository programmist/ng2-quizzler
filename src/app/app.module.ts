import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { routing }        from './app.routes';

import { AppComponent }   from './app.component';
import { QuizDataService }  from './shared/quiz-data/quiz-data.service';

import { QuizModule }       from './quiz/quiz.module';
import { ResultsModule }    from './results/results.module';
import { LoginModule }      from './login/login.module';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCDir2NlVXeuUSn8nWiiSBkS1w4Js5oDgc",
  authDomain: "ng2-quizzler.firebaseapp.com",
  databaseURL: "https://ng2-quizzler.firebaseio.com",
  storageBucket: "ng2-quizzler.appspot.com"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
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
