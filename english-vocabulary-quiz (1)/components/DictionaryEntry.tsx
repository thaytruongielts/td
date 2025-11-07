
import React from 'react';
import type { DictionaryData } from '../types';

interface HighlightedTextProps {
  text: string;
  highlight: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text, highlight }) => {
  if (!highlight) return <>{text}</>;
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <strong key={i} className="font-bold text-slate-800">{part}</strong>
        ) : (
          part
        )
      )}
    </span>
  );
};

interface DictionaryEntryProps {
  dictionary: DictionaryData;
}

export const DictionaryEntry: React.FC<DictionaryEntryProps> = ({ dictionary }) => {
  return (
    <div className="border border-slate-200 rounded-xl p-6">
      <div className="flex items-baseline gap-3">
        <h2 className="text-3xl font-bold text-slate-900">{dictionary.word}</h2>
        <span className="text-lg text-slate-500 font-mono">{dictionary.pronunciation}</span>
        <span className="text-md text-slate-500 italic">({dictionary.partOfSpeech})</span>
      </div>

      <p className="mt-4 text-slate-700 leading-relaxed">
        {dictionary.definition}
      </p>

      <div className="mt-4 text-sm">
        <span className="font-semibold text-slate-500">SYNONYM: </span>
        <span className="text-slate-600 italic">
          {dictionary.synonyms.join(', ')}
        </span>
      </div>

      <ul className="mt-6 space-y-3 text-slate-600">
        {dictionary.examples.map((example, index) => (
          <li key={index} className="flex items-start">
            <span className="text-slate-400 mr-3 mt-1">•</span>
            <span className="flex-1">
              <HighlightedText text={example.sentence} highlight={example.highlight} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
