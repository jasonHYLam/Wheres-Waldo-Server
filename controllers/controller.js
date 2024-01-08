const asyncHandler = require('express-async-handler');

const Character = require('../models/character');

exports.get_chars = asyncHandler( async(req, res, next) => {
    const allCharacters = await Character.find({}).exec()
    console.log('doki doki waku waku')
    res.json(allCharacters)
})

exports.get_specific_char = asyncHandler( async(req, res, next) => {
    console.log('nanka saa')
    console.log(req.body)

    const character = await Character.find({name: req.body.name}).exec()
    console.log('aquarius')
    console.log(character)
})