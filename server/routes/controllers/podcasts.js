const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const podcastsModel = require('../../db/models/podcasts');
const ObjectId = require('mongodb').ObjectID;
require('dotenv').config();

let emptyPodcasts = { featured: [], highlighted: [], trending: [], favorite: [] };

exports.get_podcasts = async (req, res, next) => {
  let result = await podcastsModel.get_podcasts();

  if(result && result.length > 0){
    res.status(200).json(result[0]);
  } else {
    res.status(200).json(emptyPodcasts);
  }
}
