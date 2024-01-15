const asyncHandler = require('express-async-handler');
const { body } = require('express-validator');

const UserAndScore = require('../models/userAndScore');

exports.submit_score = [

    body('name')
    .trim()
    .escape(),

    asyncHandler( async(req, res, next) => {
        // might need to unescape this
        console.log(req.body)
    })

]