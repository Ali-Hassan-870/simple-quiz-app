"use client";

import { useState } from "react";
import { quizData } from "../data/quiz-data";
import Button from "../components/common/button";
import Link from "next/link";
import { QuizCompleted } from "../components/features/quiz-completed";

export default function QuizRoute() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const {quizName, quizQuestions} = quizData;
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
    return <QuizCompleted score={score} totalQuestions={quizQuestions.length} />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FAFAFA] p-4">
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5 bg-[#F7FAFD] rounded-xl border-[#D0E5F9] border-2 overflow-y-auto drop-shadow-lg">
        <div className="space-y-4">
          <div className="flex justify-between text-gray-500 text-sm sm:text-base md:text-lg bg-[#FFFFFF] border-b-[#D0E5F9] border-b-2 p-3 md:p-5">
            <Link
              href="/"
              className="font-medium text-gray-700 hover:underline cursor-pointer"
            >
              <span>{quizName}</span>
            </Link>
            <div className="flex items-center gap-2 sm:gap-4 text-black">
              <span className="pl-2 ">
                <strong>{currentQuestionIndex + 1}</strong> of{" "}
                <strong>{quizQuestions.length}</strong>
              </span>
              <span>
                Score: <strong>{score}</strong>
              </span>
            </div>
          </div>

          <h1 className="text-xl md:text-2xl text-gray-800 font-semibold text-center px-4 pt-2">
            {currentQuestion.statement}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 mb-5 px-4 sm:px-8 md:px-16 lg:px-24 py-4 md:py-6">
            {currentQuestion.options.map((option, index) => {
              const isCorrect = index === currentQuestion.correctAnswer;
              const isSelected = selectedOption === index;
              let borderColor = "border-[#D0E5F9]";

              if (selectedOption !== null) {
                if (isCorrect) {
                  borderColor = "border-[#00794A]";
                } else if (isSelected) {
                  borderColor = "border-[#9A2222]";
                } else {
                  borderColor = "border-[#DDDDDD]";
                }
              }

              return (
                <div
                  key={index}
                  onClick={() => handleOptionSelect(index, isCorrect)}
                  className={`flex justify-center items-center font-semibold rounded-lg border-4 bg-white cursor-pointer transition-all 
                  ${borderColor} ${
                    selectedOption === null ? "hover:border-[#14599D]" : ""
                  }`}
                >
                  <p className="text-gray-800 text-sm md:text-base lg:text-lg p-2 text-center">
                    {option}
                  </p>
                </div>
              );
            })}
          </div>

          {selectedOption !== null && (
            <div className="flex justify-center px-4 sm:px-8 md:px-16 pb-6">
              <div className="w-full sm:w-auto min-w-28 md:min-w-36 h-12 md:h-14">
                <Button
                  name={isLastQuestion ? "Finish Quiz" : "Next"}
                  onClick={handleNextQuestion}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
