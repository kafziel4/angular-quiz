export type QuizData = {
  title: string;
  questions: QuizQuestion[];
  results: QuizResult;
};

export type QuizQuestion = {
  id: number;
  question: string;
  options: QuizQuestionOption[];
};

export type QuizQuestionOption = {
  id: number;
  name: string;
  alias: string;
};

export type QuizResult = {
  [key: string]: QuizResultContent;
};

export type QuizResultContent = {
  description: string;
  image: string;
};
