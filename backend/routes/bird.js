const express = require('express');
const router = express.Router();
const { getBirdDetails } = require('../controllers/birdController');

// Post route for identifying the bird and getting answers from OpenAI
router.post('/identify', getBirdDetails);

module.exports = router;
