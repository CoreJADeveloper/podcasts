import { combineReducers, Action } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

import { IAppState } from './store.interface';

import { podcastsReducer } from '../podcasts/store/podcasts.reducer';

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    podcasts: podcastsReducer(),
    router: routerReducer
  }));
