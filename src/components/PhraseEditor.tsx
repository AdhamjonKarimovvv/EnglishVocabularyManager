import React from 'react';
import { Icon } from '@iconify/react';
import { useLemma } from '../contexts/LemmaContext';
import './PhraseEditor.css';

interface Props {
  index: number;
}

const PhraseEditor: React.FC<Props> = ({ index }) => {
  const { lemma, updatePhrase, removePhrase } = useLemma();
  const phrase = lemma.phrases[index];

  const handleChange = (field: string, value: string) => {
    updatePhrase(index, { ...phrase, [field]: value });
  };

  return (
    <div className="phrase">
      <div className="phraseHeader">
        <span>Phrase {index + 1}</span>
        <button onClick={() => removePhrase(index)}><Icon icon="mdi:close" /></button>
      </div>
      
      <div className="phraseContent">
        <input 
          type="text" 
          value={phrase.phrase} 
          onChange={(e) => handleChange('phrase', e.target.value)} 
          placeholder="Phrase" 
        />
        <input 
          type="text" 
          value={phrase.phraseTranslation} 
          onChange={(e) => handleChange('phraseTranslation', e.target.value)} 
          placeholder="Phrase Translation" 
        />
      </div>
      
      <div className="explanation">
        <label>Explanation</label>
        <textarea 
          value={phrase.explanation} 
          onChange={(e) => handleChange('explanation', e.target.value)} 
        />
        <textarea 
          value={phrase.explanationTranslation} 
          onChange={(e) => handleChange('explanationTranslation', e.target.value)} 
          className="translation" 
        />
      </div>
      
      <div className="example">
        <label>Example</label>
        <textarea 
          value={phrase.example} 
          onChange={(e) => handleChange('example', e.target.value)} 
        />
        <textarea 
          value={phrase.exampleTranslation} 
          onChange={(e) => handleChange('exampleTranslation', e.target.value)} 
          className="translation" 
        />
      </div>
    </div>
  );
};

export default PhraseEditor;

