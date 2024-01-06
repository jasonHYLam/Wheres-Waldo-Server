const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res, next) => {
  res.render('index', { title: 'Express' });
});

// create get for getting database character info

// create get for all character info



module.exports = router;
