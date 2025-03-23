export interface QuizQuestion {
    id: number;
    statement: string;
    options: string[];
    correctAnswer: number;
  }
  
  export const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      statement: "Which country is known as the 'Land of the Rising Sun'?",
      options: ["China", "Japan", "South Korea", "Thailand"],
      correctAnswer: 1,
    },
    {
      id: 2,
      statement: "Which country has the largest population in the world?",
      options: ["India", "USA", "China", "Brazil"],
      correctAnswer: 2,
    },
    {
      id: 3,
      statement: "Which country is famous for its tulips and windmills?",
      options: ["Belgium", "Switzerland", "Netherlands", "Denmark"],
      correctAnswer: 2, 
    },
    {
      id: 4,
      statement: "Which country is home to the Amazon Rainforest?",
      options: ["Argentina", "Colombia", "Brazil", "Peru"],
      correctAnswer: 2, 
    },
    {
      id: 5,
      statement: "Which country is known for its pyramids and the Sphinx?",
      options: ["Mexico", "Egypt", "Greece", "Iran"],
      correctAnswer: 1, 
    },
  ];
  