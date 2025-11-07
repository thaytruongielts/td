import React, { useMemo } from 'react';
import { AnswerState } from '../types';
import { QUESTIONS_DATA } from '../data';

interface SummaryScreenProps {
  answers: AnswerState[];
  onRestart: () => void;
}

const SummaryScreen: React.FC<SummaryScreenProps> = ({ answers, onRestart }) => {
  const correctCount = useMemo(() => answers.filter((a) => a.isCorrect).length, [answers]);
  const totalQuestions = answers.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100) || 0;

  const getMessage = () => {
    if (percentage === 100) return "Outstanding! Perfect Score!";
    if (percentage >= 80) return "Excellent Work!";
    if (percentage >= 60) return "Good job! Keep practicing.";
    return "Keep practicing, you'll get better!";
  };

  return (
    <div className="h-full overflow-y-auto bg-slate-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-2">Results Summary</h2>
          <p className="opacity-90 text-lg">{getMessage()}</p>
          <div className="mt-6 inline-flex items-center justify-center bg-blue-700 rounded-full p-6 w-32 h-32">
            <div className="text-center">
              <span className="block text-4xl font-bold">{correctCount}/{totalQuestions}</span>
              <span className="text-sm text-blue-200">Correct</span>
            </div>
          </div>
        </div>

        {/* Breakdown Table */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Detailed Breakdown</h3>
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Q#</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Your Ans</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Correct</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {answers.map((answer, index) => {
                  const question = QUESTIONS_DATA.find(q => q.id === answer.questionId);
                  return (
                    <tr key={index} className={answer.isCorrect ? 'bg-green-50' : 'bg-red-50'}>
                      <td className="px-4 py-3 text-sm font-medium text-slate-900">{question?.text}</td>
                      <td className="px-4 py-3 text-sm text-slate-700 font-mono">{answer.userLocation || '-'}</td>
                      <td className="px-4 py-3 text-sm text-slate-700 font-mono">{question?.correctLocations.join(', ')}</td>
                      <td className="px-4 py-3 text-sm">
                        {answer.isCorrect ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Correct
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Wrong
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onRestart}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold text-lg transition duration-300 shadow-md active:scale-95"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryScreen;
