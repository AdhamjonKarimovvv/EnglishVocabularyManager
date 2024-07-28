import React from 'react';
import LemmaEditor from './components/LemmaEditor';
import { LemmaProvider } from './contexts/LemmaContext';
import './App.css';

function App() {
  return (
    <LemmaProvider>
      <div className="App">
        <LemmaEditor />
      </div>
    </LemmaProvider>
  );
}

export default App;
