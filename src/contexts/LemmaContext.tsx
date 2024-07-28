import React, { createContext, useState, useContext, useEffect } from 'react';
import { Lemma, LemmaContextType, WordDefinition, WordVariation, Phrase } from '../types';

const LemmaContext = createContext<LemmaContextType | undefined>(undefined);

export const useLemma = () => {
  const context = useContext(LemmaContext);
  if (!context) {
    throw new Error('useLemma must be used within a LemmaProvider');
  }
  return context;
};

export const LemmaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lemma, setLemma] = useState<Lemma>(() => {
    const savedLemma = localStorage.getItem('currentLemma');
    return savedLemma ? JSON.parse(savedLemma) : {
      id: Date.now().toString(),
      word: '',
      ipa: '',
      pronunciation: '',
      definitions: [],
      variations: [],
      phrases: []
    };
  });

  useEffect(() => {
    localStorage.setItem('currentLemma', JSON.stringify(lemma));
  }, [lemma]);

  const saveLemma = () => {
    console.log("Saving lemma...", lemma);  // Debugging: Log the lemma being saved
    try {
      const lemmas = JSON.parse(localStorage.getItem('lemmas') || '[]');
      const existingIndex = lemmas.findIndex((l: Lemma) => l.id === lemma.id);
      if (existingIndex >= 0) {
        lemmas[existingIndex] = lemma;
      } else {
        lemmas.push(lemma);
      }
      localStorage.setItem('lemmas', JSON.stringify(lemmas));
      console.log("Saved lemmas:", JSON.parse(localStorage.getItem('lemmas') || '[]'));  // Debugging: Log saved lemmas
    } catch (error) {
      console.error("Error saving lemmas:", error);  // Debugging: Log any errors
    }
  };

  const addDefinition = () => {
    setLemma(prev => ({
      ...prev,
      definitions: [...prev.definitions, {
        id: Date.now().toString(),
        pos: 'Noun',
        level: 'A1',
        explanation: '',
        example: ''
      }]
    }));
  };

  const updateDefinition = (index: number, definition: WordDefinition) => {
    setLemma(prev => ({
      ...prev,
      definitions: prev.definitions.map((d, i) => i === index ? definition : d)
    }));
  };

  const removeDefinition = (index: number) => {
    setLemma(prev => ({
      ...prev,
      definitions: prev.definitions.filter((_, i) => i !== index)
    }));
  };

  const addVariation = () => {
    setLemma(prev => ({
      ...prev,
      variations: [...prev.variations, {
        id: Date.now().toString(),
        variation: '',
        variationTranslation: '',
        explanation: '',
        example: ''
      }]
    }));
  };

  const updateVariation = (index: number, variation: WordVariation) => {
    setLemma(prev => ({
      ...prev,
      variations: prev.variations.map((v, i) => i === index ? variation : v)
    }));
  };

  const removeVariation = (index: number) => {
    setLemma(prev => ({
      ...prev,
      variations: prev.variations.filter((_, i) => i !== index)
    }));
  };

  const addPhrase = () => {
    setLemma(prev => ({
      ...prev,
      phrases: [...prev.phrases, {
        id: Date.now().toString(),
        phrase: '',
        phraseTranslation: '',
        explanation: '',
        example: ''
      }]
    }));
  };

  const updatePhrase = (index: number, phrase: Phrase) => {
    setLemma(prev => ({
      ...prev,
      phrases: prev.phrases.map((p, i) => i === index ? phrase : p)
    }));
  };

  const removePhrase = (index: number) => {
    setLemma(prev => ({
      ...prev,
      phrases: prev.phrases.filter((_, i) => i !== index)
    }));
  };

  return (
    <LemmaContext.Provider value={{
      lemma,
      setLemma,
      saveLemma,
      addDefinition,
      updateDefinition,
      removeDefinition,
      addVariation,
      updateVariation,
      removeVariation,
      addPhrase,
      updatePhrase,
      removePhrase
    }}>
      {children}
    </LemmaContext.Provider>
  );
};

