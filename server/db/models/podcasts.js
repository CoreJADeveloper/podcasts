var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var podcastModel = {};

var podcastSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  audioUrl: String,
  numberOfListeners: Number,
  featured: Boolean,
  trending: Boolean,
  highlighted: Boolean,
  favorite: Boolean,
  image : String,
  creationDate: Date
}, { versionKey: false });

podcastSchema.index({name: 'text'});

let podcast_schema_model = mongoose.model('Podcast', podcastSchema);

let facetPodcastsByType = (type) => {
  return [
    {
      $match: {
        [type]: true
      }
    },
    {
      $project : {
        favorite: 0, highlighted: 0, trending: 0, featured: 0
      }
    },
    {
      $limit: 10
    }
  ];
}

podcastModel.save_podcasts = async function(podcasts) {
  var Podcast = podcast_schema_model;

  return await Podcast.insertMany(podcasts);
}

podcastModel.get_podcasts = async function(){
  var Podcast = podcast_schema_model;

  return await Podcast.aggregate([
    {
      $facet: {
        featured: facetPodcastsByType('featured'),
        trending: facetPodcastsByType('trending'),
        highlighted: facetPodcastsByType('highlighted'),
        favorite: facetPodcastsByType('favorite'),
      }
    }
  ]);
}

podcastModel.get_podcasts_count = async function(){
  var Podcast = podcast_schema_model;

  return await Podcast.estimatedDocumentCount();
}

module.exports = podcastModel;
