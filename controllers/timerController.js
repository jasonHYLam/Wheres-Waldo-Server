const asyncHandler = require('express-async-handler');

let startTime = null;
let endTime = null;

exports.start_timer = asyncHandler( async(req, res, next) => {

    // how do i stop the if statement...
    // no idea if these if return statements are gonna help...
    // timerValue
    startTime = new Date().getTime()
    console.log('start time is')
    console.log(startTime)


}) 


exports.stop_timer_and_get_value = asyncHandler( async(req, res, next) => {

    console.log('game is over')
    endTime = new Date().getTime()
    console.log(endTime)

    console.log(`time difference: ${endTime - startTime}`)

    res.json()
})