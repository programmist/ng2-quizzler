import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent }       from './results.component';
import { AuthGuard } from "../auth/auth-guard-service";

const resultsRoutes: Routes = [
  {
    path: 'results',
    component: ResultsComponent,
    canActivate: [AuthGuard]
  }
];

export const resultsRouting = RouterModule.forChild(resultsRoutes);
