let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let podcastModel = {};

let podcastSchema = new Schema({
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

podcastModel.save_podcasts = (podcasts) => {
  let Podcast = podcast_schema_model;

  return Podcast.insertMany(podcasts);
}

podcastModel.get_podcasts = () => {
  let Podcast = podcast_schema_model;

  return Podcast.aggregate([
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

podcastModel.get_podcasts_count = () => {
  let Podcast = podcast_schema_model;

  return Podcast.estimatedDocumentCount();
}

module.exports = podcastModel;
