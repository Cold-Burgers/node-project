const mongoose = require('mongoose');
//const artist = require('./artist');

const AlbumSchema = new mongoose.Schema({
    albumTitle:{
        type: String,
        required: true
    },
    numberOfSongs:{
        type: Number
    },
    yearReleased: {
        type: Number,
        required: true
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Album', AlbumSchema)