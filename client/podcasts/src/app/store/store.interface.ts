import { IPodcast } from '../podcasts/podcasts.interface';

export interface IAppState {
  podcasts: IPodcast[];
}

export const INITIAL_STATE: IAppState = {
  podcasts: []
}
