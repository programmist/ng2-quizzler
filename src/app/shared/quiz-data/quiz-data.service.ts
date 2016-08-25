import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { Quiz } from '../model/quiz';
import { Question } from '../model/question';

@Injectable()
export class QuizDataService {

  item: FirebaseObjectObservable<any>;
  private quiz: Quiz;
  private questions: Map<number, Question>;

  get quizloaded(): boolean {
    return this.quiz != null;
  }

  get questionCount(): number {
    return this.questions.size;
  }

  get quizName(): string {
    return this.quiz.name;
  }

  get results(): Question[] {
    return this.quiz.questions.slice(0);
  }

  constructor(private angularFire: AngularFire) {}

  loadQuiz(uuid: number): Promise<void> {
    let resolver;
    const finished: Promise<void> = new Promise<void>((resolve, reject) => {
      resolver = resolve;
    });

    this.item = this.angularFire.database.object(`/quizzes/${uuid}`);
    let subscription = this.item.subscribe(
      data => {
        this.quiz = new Quiz(data);

        // TODO: Denormalize questions and get from Firebase using indices
        this.questions = this.quiz.questions.reduce((map, question, i) => {
          map.set(i + 1, question);
          return map;
        }, new Map()) as Map<number, Question>;
        subscription.unsubscribe();
        resolver();
      },
      err => console.error(err),
      () => console.log('quiz retrieved')
    );
    return finished;
  }

  getQuestion(qNumber: number): Question {
    return this.questions.get(qNumber);
  }
}
