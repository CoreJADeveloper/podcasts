const podcastsModel = require('../../db/models/podcasts');

let dummyPodcasts = () => {
  const podcasts = ["Phasellus accumsan cursus", "Sed a libero. In consectetuer turpis ut velit. ", "Phasellus nec sem in justo", "Praesent egestas neque eu", "Pellentesque habitant morbi tristique", "Mauris turpis nunc blandit", "Vestibulum ullamcorper mauris at", "Donec elit libero sodales", "Nulla consequat massa quis", "Duis lobortis massa quam"];
  const min = 1;
  const max = 100;
  const flag = [true, false];

  let podcastsData = podcasts.map(podcast => ({
    title: podcast,
    audioUrl: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
    numberOfListeners: Math.floor(Math.random() * (max - min + 1)) + min,
    featured: flag[Math.floor(Math.random() * flag.length)],
    trending: flag[Math.floor(Math.random() * flag.length)],
    highlighted: flag[Math.floor(Math.random() * flag.length)],
    favorite: flag[Math.floor(Math.random() * flag.length)],
    image: "https://images.unsplash.com/photo-1596011955428-8239125a785c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    creationDate: new Date()
  }));

  return podcastsData;
}

module.exports.dummyPodcasts = (req, res, next) => {
  let get_podcasts_count_promise = podcastsModel.get_podcasts_count();

  get_podcasts_count_promise.then((result) => {
    if(result === 0){
      let podcasts = dummyPodcasts();

      let save_podcasts_promise = podcastsModel.save_podcasts(podcasts);

      save_podcasts_promise.then((result) => {
        if(result){
          next();
        }
      });
    } else {
      next();
    }
  })
}
