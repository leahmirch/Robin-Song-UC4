import React, { useState } from 'react';

function BirdInput({ onBirdSubmit }) {
  const [birdName, setBirdName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (birdName.trim()) {
      onBirdSubmit(birdName.trim());
      setBirdName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a bird name"
        value={birdName}
        onChange={(e) => setBirdName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BirdInput;
