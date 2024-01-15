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
        })

        await userAndScore.save();
    })

]

exports.get_all_scores = asyncHandler( async(req, res, next) => {

    const allScores = await UserAndScore.find({}).exec()
    res.json({allScores})
})