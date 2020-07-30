import { IPodcast } from './podcasts.interface';

export interface IPodcastList {
  featured: IPodcast[];
  trending: IPodcast[];
  highlighted: IPodcast[];
  favorite: IPodcast[];
}
