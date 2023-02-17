type Definition = {
  definition: string;
  example: string;
};

type Phonetic = {
  text: string;
  audio: string;
};

type Meaning = {
  antonyms: string[];
  definitions: Definition[];
  partOfSpeech: string;
  synonyms: string[];
};

type Word = {
  meanings: Meaning[];
  phonetic: string;
  phonetics: Phonetic[];
  sourceUrls: string[];
  word: string;
};
