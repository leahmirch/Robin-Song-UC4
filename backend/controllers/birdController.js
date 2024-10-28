const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

// Set up OpenAI API with the key from the environment
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Sample Q&A pairs to include in each request for context
const examplePairs = [
  { question: "Are you a territorial species?", answer: "Yes, I’m quite territorial! I’ll fiercely defend my nesting area and food from other birds or animals who come too close!" },
  { question: "Is <BIRD_NAME> a territorial species?", answer: "Yes, I’m quite territorial! I’ll fiercely defend my nesting area and food from other birds or animals who come too close!" },
  { question: "Where do you eat?", answer: "I love dining in spots with plenty of cover and open views, like peaceful woodlands or friendly backyard feeders!" },
  { question: "How do I attract <BIRD_NAME> to my garden?", answer: "Providing fresh seeds, nuts, and water can really draw me in! Oak trees with acorns are also a big favorite!" },
  { question: "How do I attract you to my garden?", answer: "Providing fresh seeds, nuts, and water can really draw me in! Oak trees with acorns are also a big favorite!" },
  { question: "What do birds eat?", answer: "We birds enjoy seeds, berries, insects, and even small animals—it really depends on our species!" },
  { question: "Can you help me with math?", answer: "I'm here to answer bird-related questions! Feel free to ask me anything about birds." },
  { question: "What's the weather like?", answer: "I specialize in bird knowledge, so if you have a question about birds, I’d love to help!" },
];

exports.getBirdDetails = async (req, res) => {
  const { birdName, question } = req.body;
  console.log(`Received request for bird: ${birdName}, question: ${question}`);

  try {
    const model = "gpt-3.5-turbo";
    
    // Prepare the Q&A examples as messages for context
    const exampleMessages = examplePairs.map(pair => ({
      role: "system",
      content: `Q: ${pair.question.replace("<BIRD_NAME>", birdName)}\nA: ${pair.answer}`,
    }));

    // Add system message with instruction and user question
    const messages = [
      {
        role: "system",
        content: "You are a birdwatching assistant answering with enthusiasm! Answer questions that are only related to birds with engaging, helpful responses. If a question is outside bird-related topics, respond politely, mentioning that you only answer bird-related questions.",
      },
      ...exampleMessages,
      {
        role: "user",
        content: `Question about ${birdName}: ${question}`,
      },
    ];

    const response = await openai.createChatCompletion({
      model: model,
      messages: messages,
      max_tokens: 100,
      temperature: 0.7,
    });

    const answer = response.data.choices[0].message.content.trim();
    console.log('Received answer from OpenAI:', answer);
    res.json({ answer });
  } catch (error) {
    console.error('Error with OpenAI:', error.response ? error.response.data : error.message);
    res.status(500).json({
      message: 'Error fetching data from OpenAI',
      error: error.response ? error.response.data : error.message,
    });
  }
};
