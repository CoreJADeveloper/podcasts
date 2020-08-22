import { Podcast } from './podcast.model';

export interface PodcastList {
  featured: Podcast[];
  trending: Podcast[];
  favorite: Podcast[];
  highlighted: Podcast[];
}
