import {Question} from './question';
export class Quiz {
  uid: number;
  name: string;
  questions: Question[];

  constructor(json: any) {
    this.uid = json.uid;
    this.name = json.name;
    this.questions = json.questions
      .map(question => new Question(question));
  }
}
