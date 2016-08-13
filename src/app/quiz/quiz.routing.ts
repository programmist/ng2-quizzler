import { Routes, RouterModule } from '@angular/router';

import {QuizComponent} from "./quiz.component";
import {QuestionComponent} from "./question/question.component";

const quizRoutes: Routes = [
  { path: 'quiz', component: QuizComponent }
];

export const quizRouting = RouterModule.forChild(quizRoutes);
