/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { QuestionComponent } from './question.component';

describe('Component: Question', () => {
  it('should create an instance', () => {
    let component = new QuestionComponent();
    expect(component).toBeTruthy();
  });
});
