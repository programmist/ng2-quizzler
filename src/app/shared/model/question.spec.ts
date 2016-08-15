/* tslint:disable:no-unused-variable */

import {Question} from "./question";

describe('Question Component: ', () => {
  let questions = [
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
  ];

  describe('When constructed', () => {
    it('should create an instance', () => {
      let q2 = questions[1];
      let question = new Question(q2);
      expect(question.question).toEqual(q2['question']);
      expect(question.details).toEqual(q2['details']);
      expect(question.answer).toBe(parseInt(q2['answer']));
      expect(question.choices).toEqual(q2['choices']);
    });
  });

  describe('When a question is answered', () => {
    let question;
    let q1 = questions[0];
    beforeEach(() => {
      question = new Question(q1);
    });

    describe('and is correct', () => {
      it('should report that it is correct', () => {
        question.chosenAnswer = 0;
        expect(question.isCorrect).toBeTruthy();
      });

      it('should give correct answer text', () => {
        question.chosenAnswer = 2;
        expect(question.correctText).toEqual(q1.choices[0]);
      });
    });

    describe('and is wrong', () => {
      it('should report that it is wrong', () => {
        question.chosenAnswer = 2;
        expect(question.isCorrect).toBeFalsy();
      });

      it('should give incorrect answer text', () => {
        question.chosenAnswer = 2;
        expect(question.incorrectText).toEqual(q1.choices[2]);
      });
    });
  });
});
