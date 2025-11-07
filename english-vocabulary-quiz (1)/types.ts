
export interface Example {
  sentence: string;
  highlight: string;
}

export interface DictionaryData {
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  synonyms: string[];
  examples: Example[];
}

export interface QuestionData {
  id: number;
  sentence: string;
  correctAnswers: string[];
}

export interface QuizData {
  dictionary: DictionaryData;
  questions: QuestionData[];
}
