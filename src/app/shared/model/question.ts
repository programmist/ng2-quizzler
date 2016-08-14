export class Question {
  question: string;
  details: string;
  choices: string[];
  answer: number;
  chosenAnswer: number;

  constructor(json: any) {
    this.question = json.question;
    this.details = json.details;
    this.answer = parseInt(json.answer);
    this.choices = json.choices;
  }

  get isCorrect() {
    return this.answer === this.chosenAnswer;
  }

  get correctText() {
    return this.choices[this.answer];
  }

  get incorrectText() {
    return this.choices[this.chosenAnswer];
  }

}
