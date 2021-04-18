const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
    artistName: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    yearFounded: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true 
});

ArtistSchema.methods.getAlbums = async function () {
    
    return await mongoose.model('Album').find({
      artist: this._id
    });            
  }

module.exports = mongoose.model('Artist', ArtistSchema);