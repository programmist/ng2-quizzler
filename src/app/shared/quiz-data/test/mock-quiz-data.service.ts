import {Quiz} from "../../model/quiz";
import {Question} from "../../model/question";

export class MockQuizDataService {
  private quiz: Quiz = new Quiz({
    uid : 1,
    name: 'Test Name',
    questions : [
      {
        question : 'Question 1',
        choices  : ['A', 'B', 'C', 'D'],
        answer   : '0'
      },
      {
        question : 'Question 2',
        details  : 'question 2 details',
        choices  : ['A', 'B', 'C', 'D'],
        answer   : '1'
      },
      {
        question : 'Question 3',
        choices  : ['A', 'B', 'C', 'D'],
        answer   : '2'
      }
    ]
  });

  private questions: Map<number, Question>;

  loadQuiz() {
    this.questions = this.quiz.questions.reduce((map, question, i) => {
      map.set(i + 1, question);
      return map;
    }, new Map()) as Map<number, Question>;
    return Promise.resolve();
  }

  getQuestion(qNumber: number): Question {
    return this.questions.get(qNumber);
  }
}
