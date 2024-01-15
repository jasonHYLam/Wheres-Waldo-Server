const express = require('express');
const router = express.Router();

const characterController = require('../controllers/characterController');
const timerController = require('../controllers/timerController');

/* GET home page. */
// router.get('/',(req, res, next) => {
//   res.render('index', { title: 'Express' });
// });

router.get('/',(req, res, next) => {

});

router.get('/get_char', characterController.get_chars)

router.post('/get_specific_char', characterController.get_specific_char)
// create get for getting database character info

// create get for all character info

// get for starting timer
router.get('/start_game', timerController.start_timer)

// get for stopping timer
router.get('/stop_game', timerController.stop_timer_and_get_value)



module.exports = router;
