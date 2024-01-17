const express = require('express');
const router = express.Router();

const characterController = require('../controllers/characterController');
const timerController = require('../controllers/timerController');
const scoreController = require('../controllers/scoreController');

router.get('/get_char', characterController.get_chars);

// create get for getting database character info
router.post('/get_specific_char', characterController.get_specific_char);

// get for starting timer
router.get('/start_game', timerController.start_timer);

// get for stopping timer
router.get('/stop_game', timerController.stop_timer_and_get_value);

router.post('/submit_score', scoreController.submit_score);
router.get('/get_leaderboard/:map', scoreController.get_all_scores);

module.exports = router;
