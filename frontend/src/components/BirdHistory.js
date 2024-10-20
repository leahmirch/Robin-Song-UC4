import React, { useEffect, useState } from 'react';
import birdApi from '../api/birdApi';

function BirdHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchBirdHistory();
  }, []);

  const fetchBirdHistory = async () => {
    try {
      const response = await birdApi.getBirdHistory();
      setHistory(response.data.history);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  };

  return (
    <div>
      <h2>Bird Detection History</h2>
      <ul>
        {history.map((entry) => (
          <li key={entry.id}>
            {entry.bird_name} detected at{' '}
            {new Date(entry.detection_time).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BirdHistory;
