import React from 'react';
import { Icon } from '@iconify/react';
import { useLemma } from '../contexts/LemmaContext';
import './WordDefinitionEditor.css';

interface Props {
  index: number;
}

const WordDefinitionEditor: React.FC<Props> = ({ index }) => {
  const { lemma, updateDefinition, removeDefinition } = useLemma();
  const definition = lemma.definitions[index];

  const handleChange = (field: string, value: string) => {
    updateDefinition(index, { ...definition, [field]: value });
  };

  return (
    <div className="definition">
      <div className="definitionHeader">
        <span>Definition {index + 1}</span>
        <button onClick={() => removeDefinition(index)}><Icon icon="mdi:close" /></button>
      </div>
      
      <div className="attributes">
        <select value={definition.pos} onChange={(e) => handleChange('pos', e.target.value)}>
          <option>Noun</option>
          <option>Verb</option>
          <option>Adjective</option>
          <option>Adverb</option>
        </select>
        <select value={definition.level} onChange={(e) => handleChange('level', e.target.value)}>
          <option>A1</option>
          <option>A2</option>
          <option>B1</option>
          <option>B2</option>
          <option>C1</option>
          <option>C2</option>
        </select>
        <select value={definition.article} onChange={(e) => handleChange('article', e.target.value)}>
          <option>a</option>
          <option>an</option>
          <option>the</option>
          <option>none</option>
        </select>
      </div>
      
      <button className="addTag"><Icon icon="mdi:plus" /> tag</button>
      
      <div className="explanation">
        <label>Explanation</label>
        <textarea 
          value={definition.explanation} 
          onChange={(e) => handleChange('explanation', e.target.value)} 
        />
        <textarea 
          value={definition.explanationTranslation} 
          onChange={(e) => handleChange('explanationTranslation', e.target.value)} 
          className="translation" 
        />
      </div>
      
      <div className="example">
        <label>Example</label>
        <textarea 
          value={definition.example} 
          onChange={(e) => handleChange('example', e.target.value)} 
        />
        <textarea 
          value={definition.exampleTranslation} 
          onChange={(e) => handleChange('exampleTranslation', e.target.value)} 
          className="translation" 
        />
      </div>
      
      <div className="shortTranslation">
        <label>Short translation</label>
        <input 
          type="text" 
          value={definition.shortTranslation} 
          onChange={(e) => handleChange('shortTranslation', e.target.value)} 
        />
      </div>
    </div>
  );
};

export default WordDefinitionEditor;
