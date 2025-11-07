import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-8">
      <div className="max-w-2xl space-y-6 bg-white p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800">IELTS Reading: Sentence Location</h2>
        <p className="text-lg text-slate-600">
          Improve your scanning skills by finding exactly where the answer lies.
        </p>
        <ul className="text-left text-slate-700 space-y-3 list-disc list-inside bg-slate-50 p-6 rounded-lg">
          <li>You will be given 13 questions (Q14-Q26).</li>
          <li>For each question, find the sentence code (e.g., <strong className="font-mono bg-slate-200 px-1 rounded">C3</strong>, <strong className="font-mono bg-slate-200 px-1 rounded">F1</strong>) in the passage.</li>
          <li>You have <span className="font-bold text-red-600">2 minutes</span> per question.</li>
          <li>If you run out of time, it automatically skips to the next question.</li>
        </ul>
        <button
          onClick={onStart}
          className="w-full py-4 px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition duration-300 shadow-lg active:scale-95"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
