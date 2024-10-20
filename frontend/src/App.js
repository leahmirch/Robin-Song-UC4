import React, { useState } from 'react';
import BirdInput from './components/BirdInput';
import QnASection from './components/QnASection';
import './styles/colors.css';

function App() {
  const [birdName, setBirdName] = useState('');
  const [qnaVisible, setQnAVisible] = useState(false);  

  const handleBirdSubmit = (name) => {
    setBirdName(name);
    setQnAVisible(true); 
  };

  const handleClearBird = () => {
    setBirdName('');
    setQnAVisible(false);
  };

  return (
    <div className="app">
      <h1>Robin-Song-UC4</h1>
      {!qnaVisible && <BirdInput onBirdSubmit={handleBirdSubmit} />}
      {qnaVisible && (
        <QnASection birdName={birdName} onClearBird={handleClearBird} />
      )}
    </div>
  );
}

export default App;
