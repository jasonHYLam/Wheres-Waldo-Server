const asyncHandler = require('express-async-handler');

const Character = require('../models/character');

exports.get_chars = asyncHandler( async(req, res, next) => {
    const allCharacters = await Character.find({}).exec()
    res.json(allCharacters)
})

exports.get_specific_char = asyncHandler( async(req, res, next) => {

    const [ character ] = await Character.find({name: req.body.name}).exec()
    console.log('character')
    console.log(character)
    // compare x and y oordinates seperately, in the given range.
    // perhaps better if i swap such that range of coords is used.
    // i chose to use range of mouseCoords because of the targetBox.
    if (
        (character.coords.x < (req.body.normalisedCoords.x + 30) && character.coords.x > (req.body.normalisedCoords.x - 30))
        &&
        (character.coords.y < (req.body.normalisedCoords.y + 30) && character.coords.y > (req.body.normalisedCoords.y - 30))
        )
        {
            res.json({isCorrect: true})
        }

    else {
        res.json({isCorrect: false})
    }
})