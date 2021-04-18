const { request, response } = require('express');
const Artist = require('../models/artist');

exports.index = async(request, response, next) =>{
    try{
        const artists = await Artist.find();

        response.status(200).json(artists);
    } catch (error){
        next(error);
    }
};

exports.create = async (request, response, next) => {
    try{
        const{
            artistName,
            yearFounded
        } = request.body;

        const artist = await Artist.create({
            artistName,
            yearFounded 
        });

        response.status(200).json({
            message: "Successfully created an artist",
            status: "success",
            artist
        });
    } catch(error){
        next(error);
    }
};

exports.show = async (request, response, next) => {
    try{
        const { id } = request.params;
        const artist = await Artist.findById(id);
        const albums = await artist.getAlbums();
        console.log(artist.movies);

        response.status(200).json({...artist._doc, albums });
    } catch (error){
        next(error);
    }
};

exports.update = async (request, response, next) => {
    try {
      const { id, artistName, yearFounded } = request.body;
  
      await Artist.findOneAndUpdate({ _id: id }, { artistName, yearFounded });
      const artist = await Artist.findById(id);
  
      response.status(200)
      .json({
        message: "Successfully updated artist",
        status: "success",
        artist
      });
    } catch (error) {
      next(error);
    }
  };

 exports.destroy = async (request, response, next) => {
    try {
      const { id } = request.body;
  
      await Artist.findOneAndDelete({ _id: id });
  
      response.status(200).json({
        message: "Successfully deleted artist",
        status: "success"
      });
    } catch (error) {
      next(error);
    }
  };
