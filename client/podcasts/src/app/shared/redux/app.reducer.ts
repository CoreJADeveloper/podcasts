import { PodcastState } from '../../podcast/reducers/podcast.state';
import { podcastReducer } from '../../podcast/reducers/podcast.reducer';

export interface AppState {
    podcast: PodcastState;
}

export const appReducers = {
    podcast: podcastReducer
};
