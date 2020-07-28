// import { combineReducers } from 'redux';
// import { composeReducers, defaultFormReducer } from '@angular-redux/form';
// import { routerReducer } from '@angular-redux/router';
//
// import { createPodcastAPIReducer } from '../podcasts/api/reducer';
// import { PODCAST_TYPES } from '../podcasts/model';
//
// // Define the global store shape by combining our application's
// // reducers together into a given structure.
// export const rootReducer = composeReducers(
//   defaultFormReducer(),
//   combineReducers({
//     // podcasts: createPodcastAPIReducer(PODCAST_TYPES.CATEGORIES),
//     podcasts: createPodcastAPIReducer(),
//     router: routerReducer,
//   }));


import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
import { IPodcastsAppState } from './model';

// import { createPodcastAPIReducer } from '../podcasts/api/reducer';
// import { PODCAST_TYPES } from '../podcasts/model';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = (state: IPodcastsAppState, action) => {
  switch (action.type) {
    case 'podcasts':
      return { podcasts: [ {name: "ABC"}, {name: "DEF"} ] }
  }

  return state;
};
