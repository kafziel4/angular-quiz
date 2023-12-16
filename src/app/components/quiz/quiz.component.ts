import { Component, OnInit } from '@angular/core';
import quiz_questions from '../../../assets/data/quiz_questions.json';
import {
  QuizData,
  QuizQuestion,
  QuizResultContent,
} from '../../../assets/data/quizData';

const quizData = quiz_questions as QuizData;

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css', './quiz.component.responsive.css'],
})
export class QuizComponent implements OnInit {
  title: string = '';
  questions!: QuizQuestion[];
  selectedQuestion!: QuizQuestion;
  answers: string[] = [];
  selectedAnswer!: QuizResultContent;
  questionIndex: number = 0;
  questionMaxIndex: number = 0;
  isFinished: boolean = false;

  ngOnInit(): void {
    if (quizData) {
      this.isFinished = false;
      this.title = quizData.title;
      this.questionIndex = 0;
      this.questions = quizData.questions;
      this.selectedQuestion = this.questions[this.questionIndex];
      this.questionMaxIndex = this.questions.length;
    }
  }

  selectOption(value: string): void {
    this.answers.push(value);
    this.executeNextStep();
  }

  executeNextStep(): void {
    this.questionIndex++;

    if (this.questionMaxIndex > this.questionIndex) {
      this.selectedQuestion = this.questions[this.questionIndex];
    } else {
      this.isFinished = true;
      const finalAnswer: string = this.checkResult();
      this.selectedAnswer = quizData.results[finalAnswer];
    }
  }

  checkResult(): string {
    return this.answers.reduce((previous, current, i, arr) => {
      if (
        arr.filter((item) => item === previous).length >
        arr.filter((item) => item === current).length
      ) {
        return previous;
      } else {
        return current;
      }
    });
  }
}
