export interface Base {
  id: string;
  explanation: string;
  explanationTranslation?: string;
  example: string;
  exampleTranslation?: string;
  image?: string;
  pronunciation?: string;
  ipa?: string;
  tags?: string[];
}

export interface WordDefinition extends Base {
  pos: string;
  level: string;
  shortTranslation?: string;
  article?: string;
}

export interface WordVariation extends Base {
  variation: string;
  variationTranslation?: string;
}

export interface Phrase extends Base {
  phrase: string;
  phraseTranslation?: string;
}

export interface Lemma {
  id: string;
  word: string;
  ipa: string;
  pronunciation: string;
  translatedTo?: string;
  definitions: WordDefinition[];
  variations: WordVariation[];
  phrases: Phrase[];
}

export type Word = { lang: 'en'; lemma: Lemma; search: string };

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface LemmaContextType {
  lemma: Lemma;
  setLemma: SetState<Lemma>;
  saveLemma: () => void;
  addDefinition: () => void;
  updateDefinition: (index: number, definition: WordDefinition) => void;
  removeDefinition: (index: number) => void;
  addVariation: () => void;
  updateVariation: (index: number, variation: WordVariation) => void;
  removeVariation: (index: number) => void;
  addPhrase: () => void;
  updatePhrase: (index: number, phrase: Phrase) => void;
  removePhrase: (index: number) => void;
}