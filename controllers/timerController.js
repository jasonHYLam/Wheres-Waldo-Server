const asyncHandler = require('express-async-handler');

let timerValue = 0
let timerActivated = false

exports.update_timer = asyncHandler( async(req, res, next) => {

    timerActivated = true;

    // how do i stop the if statement...
    // no idea if these if return statements are gonna help...
    // 

    if (timerActivated) {

        // if (!timerActivated) return;

        setInterval(() => {

            // if (!timerActivated) return;
            console.log(timerValue)
            timerValue += 1


        }, 1000)

    }

}) 


exports.stop_timer_and_get_value = asyncHandler( async(req, res, next) => {
    timerActivated = false;


    console.log('game is over')



    console.log(timerValue)

    res.json(timerValue)
})