
import type { QuizData } from '../types';

export const quizData: QuizData[] = [
  {
    dictionary: {
      word: 'defend',
      pronunciation: '/dɪˈfend/',
      partOfSpeech: 'verb',
      definition: 'to protect someone or something against attack or criticism, or to speak in support of them.',
      synonyms: ['protect', 'guard', 'justify'],
      examples: [
        { sentence: "The lawyer's job is to defend a client against criminal charges in court.", highlight: 'defend a client' },
        { sentence: "It is important for everyone to learn how to defend themselves.", highlight: 'defend themselves' },
        { sentence: 'The soldiers fought bravely to defend their country from the enemy.', highlight: 'defend their country' },
        { sentence: 'You should always be able to defend your actions if you believe you are right.', highlight: 'defend your actions' },
        { sentence: "In tonight's match, the world champion will defend her title for the third time.", highlight: 'defend her title' },
      ],
    },
    questions: [
      { id: 1, sentence: 'The reigning chess master is training hard to ___ in the upcoming international tournament.', correctAnswers: ['defend her title', 'defend his title'] },
      { id: 2, sentence: 'A good lawyer must have the skills and knowledge needed to properly ___ in court.', correctAnswers: ['defend a client', 'defend their client'] },
    ],
  },
  {
    dictionary: {
      word: 'continue',
      pronunciation: '/kənˈtɪnjuː/',
      partOfSpeech: 'verb',
      definition: 'to keep existing or happening, or to keep doing something, without stopping',
      synonyms: ['carry on', 'go on', 'persist'],
      examples: [
        { sentence: 'After a short break, the professor told us to continue with the next chapter.', highlight: 'continue with' },
        { sentence: 'Although they were tired, the hikers decided to continue on to the mountain peak.', highlight: 'continue on' },
        { sentence: 'If you practice every day, your skills will continue to improve.', highlight: 'continue to improve' },
        { sentence: "Despite the challenges, she will continue as the team's captain.", highlight: 'continue as' },
        { sentence: 'The rain is expected to continue for at least another hour.', highlight: 'continue for' },
      ],
    },
    questions: [
      { id: 1, sentence: 'Her health will ___ if she keeps up with her new diet and exercise routine.', correctAnswers: ['continue to improve'] },
      { id: 2, sentence: 'The search for the missing hiker will ___ another two days because of the bad weather.', correctAnswers: ['continue for'] },
    ],
  },
  {
    dictionary: {
      word: 'convince',
      pronunciation: '/kənˈvɪns/',
      partOfSpeech: 'verb',
      definition: 'to make someone feel certain that something is true or to persuade someone to do something',
      synonyms: ['persuade', 'assure', 'satisfy'],
      examples: [
        { sentence: 'After failing the test, I had to convince myself to study harder and try again.', highlight: 'convince myself' },
        { sentence: 'My friend tried to convince me to go to the party, but I was too tired.', highlight: 'convince me to go' },
        { sentence: 'My parents are very traditional, so they are hard to convince about new ideas.', highlight: 'hard to convince' },
        { sentence: "The lawyer's job was to convince the jury of his client's innocence.", highlight: 'convince the jury of' },
        { sentence: 'It was difficult to convince him that the plan was a good idea.', highlight: 'convince him that' },
      ],
    },
    questions: [
      { id: 1, sentence: "The evidence was not strong enough to ___ the client's innocence.", correctAnswers: ["convince the jury of"] },
      { id: 2, sentence: "Although I was reluctant, my friend's arguments managed to ___ to the party.", correctAnswers: ['convince me to go'] },
    ],
  },
  {
    dictionary: {
      word: 'temperature',
      pronunciation: '/ˈtemprətʃər/',
      partOfSpeech: 'noun',
      definition: 'The measured amount of heat in a place or in the body.',
      synonyms: ['heat', 'warmth', 'coldness'],
      examples: [
        { sentence: 'The nurse used a thermometer to take his temperature.', highlight: 'take his temperature' },
        { sentence: 'Please leave the butter out of the fridge so it can reach room temperature.', highlight: 'room temperature' },
        { sentence: 'When the sun goes down in the desert, the temperature drops very quickly.', highlight: 'temperature drops' },
        { sentence: 'You should stay home from school if you have a high temperature.', highlight: 'have a high temperature' },
        { sentence: 'The average temperature in this region has increased over the last 20 years.', highlight: 'average temperature' },
      ],
    },
    questions: [
      { id: 1, sentence: 'Before the doctor can diagnose your illness, the nurse needs to ___.', correctAnswers: ['take your temperature'] },
      { id: 2, sentence: 'After the storm passed, the ___ suddenly and it started to feel much colder.', correctAnswers: ['temperature dropped'] },
    ],
  },
  {
    dictionary: {
      word: 'offer',
      pronunciation: '/ˈɔːfər/',
      partOfSpeech: 'noun',
      definition: 'an expression of readiness to give something or a proposal of a price for something',
      synonyms: ['proposal', 'bid', 'proposition'],
      examples: [
        { sentence: 'I was so excited to receive a job offer from the technology company.', highlight: 'job offer' },
        { sentence: 'The new coffee shop has a special offer this week: buy one coffee and get a second one free.', highlight: 'special offer' },
        { sentence: 'The seller thought the price was fair, so she was happy to accept the offer.', highlight: 'accept the offer' },
        { sentence: 'My classmate saw that I was confused and offered to help me with the math problem.', highlight: 'offered to help' },
        { sentence: 'He liked the apartment very much and decided to make an offer on it.', highlight: 'make an offer' },
      ],
    },
    questions: [
      { id: 1, sentence: 'After a successful final interview, Maria was delighted to receive a ___ from the international law firm.', correctAnswers: ['job offer'] },
      { id: 2, sentence: 'The electronics store has a ___ on all laptops until the end of the month.', correctAnswers: ['special offer'] },
    ],
  },
  {
    dictionary: {
      word: 'conversation',
      pronunciation: '/ˌkɑːnvərˈseɪʃn/',
      partOfSpeech: 'noun',
      definition: 'An informal talk in which news and ideas are exchanged between two or more people.',
      synonyms: ['talk', 'chat', 'discussion'],
      examples: [
        { sentence: 'When they started asking about my job, I tried to steer the conversation to a more interesting topic.', highlight: 'steer the conversation' },
        { sentence: 'I tried to strike up a conversation with the person sitting next to me on the plane.', highlight: 'strike up a conversation' },
        { sentence: 'We need to have a private conversation about this later, not here.', highlight: 'private conversation' },
        { sentence: "My parents were deep in conversation, so I didn't want to interrupt them.", highlight: 'deep in conversation' },
        { sentence: 'It is often difficult to hold a conversation in a very loud room.', highlight: 'hold a conversation' },
      ],
    },
    questions: [
      { id: 1, sentence: 'He was too shy to ___ with the interesting girl he met at the party.', correctAnswers: ['strike up a conversation'] },
      { id: 2, sentence: 'The two friends were so ___ that they didn\'t realize their train had arrived.', correctAnswers: ['deep in conversation'] },
    ],
  },
];
