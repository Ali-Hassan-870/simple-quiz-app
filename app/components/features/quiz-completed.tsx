interface QuizCompletedProps {
    score: number;
    totalQuestions: number;
  }
  
  import Button from "../common/button";
  import Link from "next/link";
  
  export function QuizCompleted({ score, totalQuestions }: QuizCompletedProps) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#FAFAFA] p-4">
        <div className="w-full max-w-md bg-[#F7FAFD] rounded-xl border-[#D0E5F9] border-2 overflow-hidden drop-shadow-lg">
          <div className="bg-[#FFFFFF] border-b-[#D0E5F9] border-b-2 p-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
              Quiz Completed!
            </h2>
          </div>
          
          <div className="p-6 md:p-8 text-center">
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Your score: {score}/{totalQuestions}
            </p>
            
            <div className="flex justify-center">
              <div className="w-full sm:w-auto min-w-28 md:min-w-36 h-12 md:h-14">
                <Link href="/">
                  <Button name="Restart" onClick={() => {}} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }