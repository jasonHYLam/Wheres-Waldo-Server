const asyncHandler = require('express-async-handler');

const Character = require('../models/character');

exports.get_char = asyncHandler( (req, res, next) => {
    res.json({name: 'twewy'})
})