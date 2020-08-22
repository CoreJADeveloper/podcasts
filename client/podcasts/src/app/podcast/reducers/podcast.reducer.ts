import { All, PodcastActionTypes } from '../actions/podcast.actions';
import { PodcastState } from './podcast.state';
import { PodcastList } from './../model/podcast-list.model';

export function podcastReducer(state: PodcastList, action: All) {
  switch (action.type) {
    case PodcastActionTypes.LIST_PODCASTS: {
      return {
        ...state,
        podcasts: {
          featured: [],
          trending: [],
          favorite: [],
          highlighted: []
        }
      };
    }
    case PodcastActionTypes.LIST_PODCASTS_SUCCESS: {
      return {
        ...state,
        podcasts: action.payload
      };
    }

    case PodcastActionTypes.LIST_PODCASTS_FAILURE: {
      return {
        ...state,
        podcasts: {
          featured: [],
          trending: [],
          favorite: [],
          highlighted: []
        }
      };
    }

    default: {
      return state;
    }
  }
}
