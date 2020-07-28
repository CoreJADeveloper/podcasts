import { combineReducers, Action } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

import { IAppState } from './store.interface';
import { LOAD_PODCASTS } from '../podcasts/podcasts.actions';

import { podcastsReducer } from '../podcasts/podcasts.reducer';

// export const rootReducer = (state: IAppState, action: Action) => {
//   switch (action.type) {
//     case LOAD_PODCASTS:
//       return { podcasts: [ {_id: "dh232j4h", title: "Test", audioUrl: "test.com", numberOfListeners: 10, image: "image.com", creationDate: "25 June"} ] }
//   }
//
//   return state;
// };

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    podcasts: podcastsReducer(),
    // router: routerReducer,
  }));
