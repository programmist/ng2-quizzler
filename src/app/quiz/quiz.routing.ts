import { Routes, RouterModule } from '@angular/router';

import {QuizComponent} from './quiz.component';

const quizRoutes: Routes = [
  { path: 'quiz', component: QuizComponent }
];

export const quizRouting = RouterModule.forChild(quizRoutes);
