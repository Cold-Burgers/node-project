const Album = require('../models/album');

exports.index = async (request, response, next) => {
    try {
      const albums = await Album.find().populate('artist');
  
      response.status(200).json(albums);
    } catch (error) {
      next(error);
    }
  };

  
exports.create = async (request, response, next) => {
    try {
      const {
        albumTitle,
        numberOfSongs,
        yearReleased,
        artist
      } = request.body;
  
      const album = await Album.create({
        albumTitle,
        numberOfSongs,
        yearReleased,
        artist
      });
  
      response.status(200).json({
        message: "Successfully created an album",
        status: "success",
        album
      });
    } catch (error) {
      next(error);
    }
  };

  exports.show = async (request, response, next) => {
    try {
      const { id } = request.params;
  
      const album = await Album.findById(id).populate('artist');
  
      response.status(200).json(album);
    } catch (error) {
      next(error);
    }
  };

  exports.update = async (request, response, next) => {
    try {
      const {
        albumTitle,
        numberOfSongs,
        yearReleased,
        artist
      } = request.body;
  
      await Album.findOneAndUpdate({ _id: id }, {
        albumTitle,
        numberOfSongs,
        yearReleased,
        artist
      });
  
      const album = await Movie.findById(id);
  
      response.status(200).json({
        message: "Successfully updated album",
        status: "success",
        movie
      });
    } catch (error) {
      next(error);
    }
  };

  exports.destroy = async (request, response, next) => {
    try {
      const { id } = request.body;
  
      await Album.findOneAndDelete({ _id: id });
  
      response.status(200).json({
        message: "Successfully deleted album",
        status: "success"
      });
    } catch (error) {
      next(error);
    }
  };
  
  