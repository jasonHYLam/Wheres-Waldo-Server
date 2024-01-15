const opts = { toJSON: { virtuals: true }};

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserAndScoreSchema = new Schema({
    name: {required: true, type: String},
    timeInMs: {required: true, type: Number},
}, opts)

UserAndScoreSchema.virtual('timeInSeconds').get(function() {
    return this.timeInMs/1000
})

module.exports = mongoose.model('UserAndScore', UserAndScoreSchema);
