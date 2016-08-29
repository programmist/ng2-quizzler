import { Routes, RouterModule } from '@angular/router';

import { QuizComponent } from './quiz.component';
import { AuthGuard } from "../auth/auth-guard-service";

const quizRoutes: Routes = [
  {
    path: 'quiz',
    component: QuizComponent,
    canActivate: [AuthGuard]
  }
];

export const quizRouting = RouterModule.forChild(quizRoutes);
