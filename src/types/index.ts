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
  