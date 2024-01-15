const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: {type: String, required: true},
    coords: {
        x: {type: Number, required: true},
        y: {type: Number, required: true},
    },
    is_found: {type: Boolean, required: true, default: false},

    map: {type: Boolean, required: true}
})

module.exports = mongoose.model('Character', CharacterSchema);