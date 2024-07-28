import React from 'react';
import { Icon } from '@iconify/react';
import { useLemma } from '../contexts/LemmaContext';
import './WordVariationEditor.css';

interface Props {
  index: number;
}

const WordVariationEditor: React.FC<Props> = ({ index }) => {
  const { lemma, updateVariation, removeVariation } = useLemma();
  const variation = lemma.variations[index];

  const handleChange = (field: string, value: string) => {
    updateVariation(index, { ...variation, [field]: value });
  };

  return (
    <div className="variation">
      <div className="variationHeader">
        <span>Variation {index + 1}</span>
        <button onClick={() => removeVariation(index)}><Icon icon="mdi:close" /></button>
      </div>
      
      <div className="variationContent">
        <input 
          type="text" 
          value={variation.variation} 
          onChange={(e) => handleChange('variation', e.target.value)} 
          placeholder="Variation" 
        />
        <input 
          type="text" 
          value={variation.variationTranslation} 
          onChange={(e) => handleChange('variationTranslation', e.target.value)} 
          placeholder="Variation Translation" 
        />
      </div>
      
      <div className="explanation">
        <label>Explanation</label>
        <textarea 
          value={variation.explanation} 
          onChange={(e) => handleChange('explanation', e.target.value)} 
        />
        <textarea 
          value={variation.explanationTranslation} 
          onChange={(e) => handleChange('explanationTranslation', e.target.value)} 
          className="translation" 
        />
      </div>
      
      <div className="example">
        <label>Example</label>
        <textarea 
          value={variation.example} 
          onChange={(e) => handleChange('example', e.target.value)} 
        />
        <textarea 
          value={variation.exampleTranslation} 
          onChange={(e) => handleChange('exampleTranslation', e.target.value)} 
          className="translation" 
        />
      </div>
    </div>
  );
};

export default WordVariationEditor;
