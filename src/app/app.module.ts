import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { routing }        from './app.routes';

import { AppComponent }   from './app.component';
import { QuizService }  from './shared/quiz-data/quiz.service';

import { AuthModule } from "./auth/auth.module";
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

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

const angularFireConfig = AngularFireModule.initializeApp(
  firebaseConfig, myFirebaseAuthConfig
);

@NgModule({
  imports: [
    BrowserModule,
    angularFireConfig,
    FormsModule,
    routing,
    HttpModule,
    AuthModule,
    QuizModule,
    ResultsModule,
    LoginModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    QuizService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
