import { Routes, RouterModule } from '@angular/router';
import {ResultsComponent}       from './results.component';

const resultsRoutes: Routes = [
  { path: 'results', component: ResultsComponent }
];

export const resultsRouting = RouterModule.forChild(resultsRoutes);
