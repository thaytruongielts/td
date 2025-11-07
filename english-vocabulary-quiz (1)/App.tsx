
import React, { useState, useCallback } from 'react';
import { DictionaryEntry } from './components/DictionaryEntry';
import { Question } from './components/Question';
import { quizData } from './data/quizData';
import type { QuizData } from './types';
import { ChevronLeftIcon, ChevronRightIcon } from './components/icons';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quizData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quizData.length) % quizData.length);
  }, []);

  const currentQuiz: QuizData = quizData[currentIndex];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Vocabulary Practice</h1>
          <p className="text-slate-600 mt-2">Look at the dictionary entry and complete the sentences.</p>
        </header>

        <main className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <DictionaryEntry dictionary={currentQuiz.dictionary} />
          
          <div className="mt-8 space-y-6">
            {currentQuiz.questions.map((q, index) => (
              <Question key={`${currentIndex}-${q.id}`} question={q} questionNumber={index + 1} />
            ))}
          </div>
        </main>
        
        <footer className="mt-8 flex justify-between items-center">
          <button 
            onClick={handlePrev} 
            className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 font-semibold rounded-lg shadow-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
          >
            <ChevronLeftIcon className="h-5 w-5" />
            Previous
          </button>
          <span className="text-slate-600 font-medium">{currentIndex + 1} / {quizData.length}</span>
          <button 
            onClick={handleNext} 
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
          >
            Next
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default App;
