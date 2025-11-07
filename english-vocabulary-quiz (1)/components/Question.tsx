
import React, { useState, useEffect } from 'react';
import type { QuestionData } from '../types';
import { CheckCircleIcon, ExclamationCircleIcon, QuestionMarkCircleIcon } from './icons';

interface QuestionProps {
  question: QuestionData;
  questionNumber: number;
}

export const Question: React.FC<QuestionProps> = ({ question, questionNumber }) => {
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  
  useEffect(() => {
    setAnswer('');
    setStatus('idle');
  }, [question]);

  const handleCheck = () => {
    const isCorrect = question.correctAnswers.some(
      correct => correct.toLowerCase() === answer.trim().toLowerCase()
    );
    setStatus(isCorrect ? 'correct' : 'incorrect');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  const [prefix, suffix] = question.sentence.split('___');

  const statusStyles = {
    idle: 'border-slate-300 focus-within:border-blue-500 focus-within:ring-blue-500',
    correct: 'border-green-500 ring-green-500',
    incorrect: 'border-red-500 ring-red-500',
  };

  return (
    <div className="bg-slate-50/80 p-5 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-bold text-slate-700">Question {questionNumber}</span>
        <div className="p-1.5 bg-white rounded-full border border-slate-200">
            <QuestionMarkCircleIcon className="w-5 h-5 text-slate-400" />
        </div>
      </div>
      
      <p className="text-slate-700 mb-4 leading-relaxed">
        {prefix}
        <span className="inline-block w-48 h-6 border-b-2 border-dashed border-slate-300 mx-2 align-bottom"></span>
        {suffix}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className={`relative flex-grow w-full rounded-md shadow-sm border ${statusStyles[status]} transition-colors duration-200 bg-white`}>
            <input
                type="text"
                value={answer}
                onChange={handleChange}
                placeholder="Write your answer"
                className="w-full px-4 py-2.5 rounded-md focus:outline-none focus:ring-0 border-0 bg-transparent"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                {status === 'correct' && <CheckCircleIcon className="h-6 w-6 text-green-500" />}
                {status === 'incorrect' && <ExclamationCircleIcon className="h-6 w-6 text-red-500" />}
            </div>
        </div>

        <button
          onClick={handleCheck}
          disabled={!answer.trim()}
          className="w-full sm:w-auto px-8 py-2.5 bg-slate-700 text-white font-semibold rounded-md shadow-sm hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all duration-200"
        >
          Check
        </button>
      </div>
    </div>
  );
};
