const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const podcastsModel = require('../../db/models/podcasts');
const ObjectId = require('mongodb').ObjectID;
require('dotenv').config();

let emptyPodcasts = { featured: [], highlighted: [], trending: [], favorite: [] };

exports.get_podcasts = (req, res, next) => {
  let get_podcasts_promise = podcastsModel.get_podcasts();

  get_podcasts_promise.then((result) => {
    if(result && result.length > 0){
      res.status(200).json(result[0]);
    } else {
      res.status(200).json(emptyPodcasts);
    }
  }).catch(function(err) {
    res.status(500).json({"error": err});
  });
}
