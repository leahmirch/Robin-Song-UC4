import React, { useState } from 'react';
import birdApi from '../api/birdApi';

function QnASection({ birdName, onClearBird }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskQuestion = async () => {
    if (!question.trim()) return;

    setLoading(true);

    try {
      const response = await birdApi.getBirdAnswer(birdName, question);
      console.log('Received response from backend:', response); 
      setAnswer(response.answer);
    } catch (error) {
      console.error('Error fetching answer:', error);
      setAnswer('Error fetching answer. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setQuestion('');
    setAnswer('');
    onClearBird();
  };

  return (
    <div>
      <h2>Ask about {birdName}</h2>
      <input
        type="text"
        placeholder="Ask a question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleAskQuestion} disabled={loading}>
        {loading ? 'Loading...' : 'Ask'}
      </button>
      <button onClick={handleClear} disabled={loading}>
        Clear
      </button>

      {/* Answer Section */}
      <div className="answer-section">
        <h3>Answer:</h3>
        <p>{answer}</p> {/* Display the answer */}
      </div>
    </div>
  );
}

export default QnASection;
