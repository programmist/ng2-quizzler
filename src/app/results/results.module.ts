import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {ResultsComponent} from './results.component';
import {resultsRouting}   from './results.routing';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    resultsRouting
  ],
  declarations: [
    ResultsComponent
  ],
  providers: [
  ]
})
export class ResultsModule {}
