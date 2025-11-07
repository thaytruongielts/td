import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnswerState, Question } from '../types';
import { QUESTIONS_DATA } from '../data';
import PassageView from './PassageView';
import QuestionPanel from './QuestionPanel';

interface QuizScreenProps {
  onFinish: (answers: AnswerState[]) => void;
}

const QUIZ_TIME_SECONDS = 120; // 2 minutes

const QuizScreen: React.FC<QuizScreenProps> = ({ onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME_SECONDS);
  const [answers, setAnswers] = useState<AnswerState[]>([]);
  const timerRef = useRef<number | null>(null);

  const currentQuestion = QUESTIONS_DATA[currentIndex];
  const totalQuestions = QUESTIONS_DATA.length;

  // Start Timer
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit(''); // Auto-submit empty if timeout
          return QUIZ_TIME_SECONDS;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleSubmit = useCallback((userLocation: string) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    const normalizedInput = userLocation.trim().toUpperCase();
    // Check if user input matches ANY of the correct locations
    const isCorrect = currentQuestion.correctLocations.includes(normalizedInput);

    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        userLocation: normalizedInput,
        isCorrect,
        timeSpent: QUIZ_TIME_SECONDS - timeLeft,
      },
    ]);

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setTimeLeft(QUIZ_TIME_SECONDS);
    } else {
      // Finished - need to ensure final answer is in state before finishing
      const finalAnswer: AnswerState = {
          questionId: currentQuestion.id,
          userLocation: normalizedInput,
          isCorrect,
          timeSpent: QUIZ_TIME_SECONDS - timeLeft,
      };
      // Wait a tick to ensure state update, or pass directly
      onFinish([...answers, finalAnswer]);
    }
  }, [currentIndex, currentQuestion, timeLeft, totalQuestions, onFinish, answers]);

  return (
    <div className="flex h-full flex-col lg:flex-row">
      {/* Left Panel: Passage */}
      <div className="w-full lg:w-7/12 h-1/2 lg:h-full overflow-y-auto border-r border-slate-200 bg-white">
        <PassageView />
      </div>

      {/* Right Panel: Question & Timer */}
      <div className="w-full lg:w-5/12 h-1/2 lg:h-full bg-slate-50 p-4 md:p-6 flex flex-col">
        <QuestionPanel
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={totalQuestions}
          timeLeft={timeLeft}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default QuizScreen;
