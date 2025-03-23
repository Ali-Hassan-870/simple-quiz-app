export interface QuizQuestion {
  id: number;
  statement: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    statement: "Which word is misspelled in the following options?",
    options: ["Accommodation", "Occurence", "Necessary", "Definitely"],
    correctAnswer: 1, // "Occurence" is incorrect (should be "Occurrence")
  },
  {
    id: 2,
    statement: "Identify the misspelled word:",
    options: ["Separate", "Recieve", "Grateful", "Tomorrow"],
    correctAnswer: 1, // "Recieve" is incorrect (should be "Receive")
  },
  {
    id: 3,
    statement: "Which word contains a spelling error?",
    options: ["Recommend", "Embarass", "Colleague", "Privilege"],
    correctAnswer: 1, // "Embarass" is incorrect (should be "Embarrass")
  },
  {
    id: 4,
    statement: "Find the misspelled word among these options:",
    options: ["Consensus", "Mischievous", "Liason", "Questionnaire"],
    correctAnswer: 2, // "Liason" is incorrect (should be "Liaison")
  },
  {
    id: 5,
    statement: "Which of these words is not spelled correctly?",
    options: ["Supersede", "Inoculate", "Millenium", "Relevant"],
    correctAnswer: 2, // "Millenium" is incorrect (should be "Millennium")
  },
];
