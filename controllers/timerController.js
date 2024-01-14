const asyncHandler = require('express-async-handler');

let startTime = null;
let endTime = null;

exports.start_timer = asyncHandler( async(req, res, next) => {

    startTime = new Date().getTime()
    console.log('start time is')
    console.log(startTime)

    res.send();

}) 


exports.stop_timer_and_get_value = asyncHandler( async(req, res, next) => {

    console.log('game is over')
    endTime = new Date().getTime()
    console.log(endTime)

    console.log(`time difference: ${endTime - startTime}`)
    const timeTotal = endTime - startTime;

    res.json({timeTotal})
})