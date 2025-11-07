import React from 'react';
import { PASSAGE_DATA } from '../data';

const PassageView: React.FC = () => {
  return (
    <div className="p-6 md:p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-slate-800 sticky top-0 bg-white pb-2 pt-2">
        The Fertility Bust (Paragraph/Sentence Count)
      </h2>
      <div className="space-y-6">
        {PASSAGE_DATA.map((paragraph) => (
          <div key={paragraph.id} className="relative pl-8">
            <span className="absolute -left-1 top-0 text-xl font-bold text-blue-500">
              {paragraph.id}
            </span>
            {paragraph.sentences.map((sentence) => (
              <span key={sentence.id} className="inline relative group hover:bg-yellow-100 transition-colors cursor-default mr-1">
                <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-1 rounded border border-blue-100 mr-1 align-baseline select-all">
                  {sentence.id}
                </span>
                <span className="text-slate-700 leading-relaxed">
                  {sentence.text}{" "}
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PassageView;
