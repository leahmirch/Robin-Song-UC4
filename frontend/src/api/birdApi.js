const getBirdAnswer = async (birdName, question) => {
    try {
      const response = await fetch('http://localhost:5000/api/birds/identify', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ birdName, question }),
      });
  
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
  
      const data = await response.json(); 
      console.log('Backend response:', data); 
      return data;
    } catch (error) {
      console.error('Error in getBirdAnswer:', error);
      throw error;
    }
  };
  
  export default { getBirdAnswer };
  