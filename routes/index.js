const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

/* GET home page. */
// router.get('/',(req, res, next) => {
//   res.render('index', { title: 'Express' });
// });

router.get('/',(req, res, next) => {

});

router.get('/get_char', controller.get_char)

// create get for getting database character info

// create get for all character info



module.exports = router;
