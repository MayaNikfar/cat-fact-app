const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res, next) => {
  try {
    const response = await axios.get('https://catfact.ninja/fact');
    const catFact = response.data.fact;
    res.render('cat/fact', { catFact });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching cat fact');
  }
});

module.exports = router;
