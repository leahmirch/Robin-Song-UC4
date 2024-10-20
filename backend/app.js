require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const birdRoutes = require('./routes/bird');
app.use('/api/birds', birdRoutes);

console.log('OpenAI API Key:', process.env.OPENAI_API_KEY);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
