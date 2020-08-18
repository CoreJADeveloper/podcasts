import { All, PodcastActionTypes } from '../actions/podcast.actions';
import { initialState, PodcastState } from './podcast.state';


export function podcastReducer(state = initialState, action: All): PodcastState {
  switch (action.type) {
    case PodcastActionTypes.LIST_PODCASTS: {
      return {
        ...state,
        list: {},
        isListLoading: true
      };
    }
    case PodcastActionTypes.LIST_PODCASTS_SUCCESS: {
      return {
        ...state,
        list: action.payload,
        isListLoading: false
      };
    }

    case PodcastActionTypes.LIST_PODCASTS_FAILURE: {
      return {
        ...state,
        isLoading: false
      };
    }

    default: {
        return state;
    }
  }
}
