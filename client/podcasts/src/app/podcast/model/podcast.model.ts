export class Podcast {

  _id: string;
  title: string;
  audioUrl: string;
  numberOfListeners: number;
  image: string;
  creationDate: string;

  constructor(podcast: any) {
      this._id = podcast._id;
      this.title = podcast.title;
      this.audioUrl = podcast.audioUrl;
      this.numberOfListeners = podcast.numberOfListeners;
      this.image = podcast.image;
      this.creationDate = podcast.creationDate;
  }
}
