const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');
const timerController = require('../controllers/timerController');

/* GET home page. */
// router.get('/',(req, res, next) => {
//   res.render('index', { title: 'Express' });
// });

router.get('/',(req, res, next) => {

});

router.get('/get_char', controller.get_chars)

router.post('/get_specific_char', controller.get_specific_char)
// create get for getting database character info

// create get for all character info

// get for starting timer
router.get('/start_game', timerController.update_timer)

// get for stopping timer
router.get('/stop_game', timerController.stop_timer_and_get_value)



module.exports = router;
