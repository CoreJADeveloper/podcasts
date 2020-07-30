import { combineReducers, Action } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

import { IAppState } from '../../store/store.interface';
import { INITIAL_STATE } from './podcasts.data';
import { LOAD_STARTED, LOAD_SUCCEEDED, LOAD_FAILED } from './podcasts.actions';

export function podcastsReducer() {
  return function reducer(state: IAppState = INITIAL_STATE,
    action: any): IAppState {

    switch (action.type) {
      case LOAD_STARTED:
        return {
          podcasts: INITIAL_STATE
        };
      case LOAD_SUCCEEDED:
        return {
          podcasts: action.podcasts,
        };
      case LOAD_FAILED:
        return {
          podcasts: INITIAL_STATE
        };
    }

    return state;
  };
}
