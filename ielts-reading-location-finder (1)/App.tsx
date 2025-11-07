import React, { useState, useCallback } from 'react';
import { AppState, AnswerState } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import SummaryScreen from './components/SummaryScreen';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.WELCOME);
  const [answers, setAnswers] = useState<AnswerState[]>([]);

  const handleStart = useCallback(() => {
    setAnswers([]);
    setAppState(AppState.QUIZ);
  }, []);

  const handleFinish = useCallback((finalAnswers: AnswerState[]) => {
    setAnswers(finalAnswers);
    setAppState(AppState.SUMMARY);
  }, []);

  const handleRestart = useCallback(() => {
    setAnswers([]);
    setAppState(AppState.WELCOME);
  }, []);

  return (
    <main className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-100">
      <header className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm shrink-0">
        <h1 className="text-xl font-bold text-slate-800">IELTS Location Trainer</h1>
        <p className="text-sm text-slate-500">Identify the sentence location (e.g., E3)</p>
      </header>

      <div className="flex-1 overflow-hidden">
        {appState === AppState.WELCOME && <WelcomeScreen onStart={handleStart} />}
        {appState === AppState.QUIZ && <QuizScreen onFinish={handleFinish} />}
        {appState === AppState.SUMMARY && <SummaryScreen answers={answers} onRestart={handleRestart} />}
      </div>
    </main>
  );
};

export default App;