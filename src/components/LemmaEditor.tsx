import { Icon } from '@iconify/react';
import { useLemma } from '../contexts/LemmaContext';
import WordDefinitionEditor from './WordDefinitionEditor';
import WordVariationEditor from './WordVariationEditor';
import PhraseEditor from './PhraseEditor';
import './LemmaEditor.css';

const LemmaEditor: React.FC = () => {
  const { lemma, setLemma, saveLemma, addDefinition, addVariation, addPhrase } = useLemma();

  return (
    <div className="container">
      <div className="header">
        <input
          className="search"
          type="text"
          placeholder="Search a word..."
          value={lemma.word}
          onChange={(e) => setLemma((prev) => ({ ...prev, word: e.target.value }))}
        />
        <div className="headerActions">
          <Icon icon="mdi:dots-horizontal" />
          <Icon icon="emojione-v1:flag-for-russia" />
        </div>
      </div>
      
      <div className="content">
        <div className="wordInfo">
          <input
            className="ipa"
            type="text"
            value={lemma.ipa}
            onChange={(e) => setLemma((prev) => ({ ...prev, ipa: e.target.value }))}
            placeholder="Word IPA"
          />
          <button className="pronounce">
            <Icon icon="mdi:volume-high" /> pronounce
          </button>
        </div>

        <button className="addVariation" onClick={addVariation}>
          <Icon icon="mdi:plus" /> add word variation
        </button>

        {lemma.variations.map((variation, index) => (
          <WordVariationEditor key={variation.id} index={index} />
        ))}

        <h2>Definitions</h2>
        {lemma.definitions.map((definition, index) => (
          <WordDefinitionEditor key={definition.id} index={index} />
        ))}
        
        <button className="addDefinition" onClick={addDefinition}>
          <Icon icon="mdi:translate" /> Add definition
        </button>
        
        <h2>Phrases</h2>
        {lemma.phrases.map((phrase, index) => (
          <PhraseEditor key={phrase.id} index={index} />
        ))}

        <button className="addPhrase" onClick={addPhrase}>
          <Icon icon="mdi:message" /> Add phrase
        </button>
      </div>
      
      <div className="save-container">  {/* Ensure save button is in a proper container */}
        <button className="save" onClick={() => { saveLemma(); alert('Lemma saved!'); }}> {/* Alert added for confirmation */}
          <Icon icon="mdi:content-save" /> Save
        </button>
      </div>
    </div>
  );
};

export default LemmaEditor;
