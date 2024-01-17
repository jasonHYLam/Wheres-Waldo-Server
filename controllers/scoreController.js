const asyncHandler = require('express-async-handler');
const { body } = require('express-validator');
const he = require('he');

const UserAndScore = require('../models/userAndScore');

exports.submit_score = [

    body('name')
    .trim()
    .escape(),

    asyncHandler( async(req, res, next) => {

        const userAndScore = new UserAndScore({
            name: he.decode(req.body.name),
            timeInMs: req.body.timerValue,
            mapName: req.body.mapName,
        })

        await userAndScore.save();
    })

]

// Get all scores corresponding to a map. Map reference is obtained from params. The scores are sorted by time.
exports.get_all_scores = asyncHandler( async(req, res, next) => {
    const allScores = await UserAndScore
    .find({mapName: req.params.map})
    .sort({timeInMs: 1}).exec();

    res.json({allScores})
})