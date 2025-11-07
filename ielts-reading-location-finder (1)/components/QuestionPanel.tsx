import React, { useState, useEffect } from 'react';
import { Question } from '../types';

interface QuestionPanelProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  timeLeft: number;
  onSubmit: (location: string) => void;
}

const QuestionPanel: React.FC<QuestionPanelProps> = ({
  question,
  questionNumber,
  totalQuestions,
  timeLeft,
  onSubmit,
}) => {
  const [userInput, setUserInput] = useState('');

  // Reset input when question changes
  useEffect(() => {
    setUserInput('');
  }, [question.id]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(userInput);
  };

  const progressPercentage = (timeLeft / 120) * 100;

  return (
    <div className="flex-1 flex flex-col">
      {/* Status Bar */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-medium text-slate-500">
          Question {questionNumber} of {totalQuestions}
        </span>
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${timeLeft < 30 ? 'text-red-600 animate-pulse' : 'text-slate-600'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className={`font-mono text-lg font-bold ${timeLeft < 30 ? 'text-red-600' : 'text-slate-700'}`}>
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Timer bar */}
      <div className="w-full bg-slate-200 rounded-full h-2 mb-8">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-linear"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex-1 flex flex-col">
        <div className="flex-1">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4">
            {question.text}
          </span>
          <h3 className="text-xl font-medium text-slate-800 leading-relaxed mb-8">
            {question.questionText}
          </h3>

          <form onSubmit={handleFormSubmit} className="mt-auto">
            <label htmlFor="locationInput" className="block text-sm font-medium text-slate-700 mb-2">
              Where is the answer located?
            </label>
            <div className="flex gap-2">
              <input
                id="locationInput"
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value.toUpperCase())}
                placeholder="e.g. C3"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-mono uppercase transition-colors"
                maxLength={3}
                autoFocus
                autoComplete="off"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors active:bg-blue-800"
              >
                Submit
              </button>
            </div>
             <p className="text-sm text-slate-500 mt-2">
              Enter the sentence code (Letter + Number)
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuestionPanel;