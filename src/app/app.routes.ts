import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'quiz/:id',
    component: QuestionComponent
  },
  {
    path: 'results/',
    component: ResultsComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
