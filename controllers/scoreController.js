const asyncHandler = require('express-async-handler');
const { body } = require('express-validator');

const UserAndScore = require('../models/userAndScore');

exports.submit_score = asyncHandler( async(req, res, next) => {})