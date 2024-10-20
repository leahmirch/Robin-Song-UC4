const { Configuration, OpenAIApi } = require('openai');

// Set up OpenAI API with the key from the environment
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.getBirdDetails = async (req, res) => {
    const { birdName, question } = req.body;
    
    console.log(`Received request for bird: ${birdName}, question: ${question}`);
  
    try {
      // Create the chat messages array for the chat-based model
      const messages = [
        { role: 'system', content: 'You are a friendly birdwatching assistant in Dearborn, Michigan.' },
        { role: 'user', content: `The bird identified is ${birdName}. Answer the following question: ${question}` }
      ];
  
      // Use the correct OpenAI Chat API endpoint
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 200,
        temperature: 0.7,
      });
  
      const answer = response.data.choices[0].message.content.trim();
      console.log('Received answer from OpenAI:', answer); 
      res.json({ answer });
    } catch (error) {
      console.error('Error with OpenAI:', error.response ? error.response.data : error.message);
  
      // Send detailed error back to the client for easier debugging
      res.status(500).json({
        message: 'Error fetching data from OpenAI',
        error: error.response ? error.response.data : error.message,
      });
    }
  };
  