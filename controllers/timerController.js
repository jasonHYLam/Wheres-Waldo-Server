const asyncHandler = require('express-async-handler');

let startTime = null;
let endTime = null;

exports.start_timer = asyncHandler( async(req, res, next) => {

    startTime = new Date().getTime()
    res.send();

}) 


exports.stop_timer_and_get_value = asyncHandler( async(req, res, next) => {

    endTime = new Date().getTime()
    const timeTotal = endTime - startTime;
    res.json({timeTotal})
})