const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ name: '图雀社区', website: 'https://tuture.co' });
});

router.get('/index', (req, res) => {
    res.json({ name: '图雀社区', website: 'https://tuture.co' });
});
  

module.exports = router;