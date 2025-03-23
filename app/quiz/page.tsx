"use client";

import { useState } from "react";
import { quizQuestions } from "../data/quiz-data";
import Button from "../components/button";

export default function QuizRoute() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setSelectedOption(null);
  };

  const handleOptionSelect = (optionIndex: number, isCorrect: boolean) => {
    if (selectedOption === null) {
      setSelectedOption(optionIndex);
      if (isCorrect) {
        setScore(score + 1);
      }
    }
  };

  if (currentQuestionIndex >= quizQuestions.length) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Quiz Completed!
        </h2>
        <p className="text-xl text-gray-600">
          Congratulations on finishing all questions!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FAFAFA]">
      <div className="max-w-2xl mx-auto p-6 space-y-8 bg-[#aac9e7]">
        <div className="space-y-2">
          <div className="text-gray-500 text-lg">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </div>
          <h1 className="text-gray-500 text-lg">Score: {score}</h1>
          <h1 className="text-2xl text-gray-800 font-semibold">
            {currentQuestion.statement}
          </h1>
        </div>

        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => {
            const isCorrect = index === currentQuestion.correctAnswer;
            const isSelected = selectedOption === index;
            let borderColor = "border-gray-200";

            if (selectedOption !== null) {
              if (isCorrect) {
                borderColor = "border-green-500";
              } else if (isSelected) {
                borderColor = "border-red-500";
              } else {
                borderColor = "border-purple-600";
              }
            }
            return (
              <div
                key={index}
                onClick={() => handleOptionSelect(index, isCorrect)}
                className={`p-4 rounded-lg border-2 bg-white cursor-pointer transition-all
                ${borderColor} ${
                  selectedOption === null ? "hover:border-blue-400" : ""
                }
                `}
              >
                <p className="text-gray-800 text-lg">{option}</p>
              </div>
            );
          })}
        </div>

        {selectedOption !== null && (
          <div className="mt-8">
            <Button
              name={isLastQuestion ? "Finish Quiz" : "Next Question"}
              onClick={handleNextQuestion}
            />
          </div>
        )}
      </div>
    </div>
  );
}
