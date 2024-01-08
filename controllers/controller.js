const asyncHandler = require('express-async-handler');

const Character = require('../models/character');

exports.get_chars = asyncHandler( async(req, res, next) => {
    const allCharacters = await Character.find({}).exec()
    res.json(allCharacters)
})

exports.get_specific_char = asyncHandler( async(req, res, next) => {
    console.log('game sucks')
})