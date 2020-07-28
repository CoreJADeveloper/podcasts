import { combineReducers, Action } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

import { IAppState, INITIAL_STATE } from '../store/store.interface';
import { LOAD_PODCASTS } from './podcasts.actions';

export function podcastsReducer() {
  return function reducer(state: IAppState = INITIAL_STATE,
    action: Action): IAppState {

    switch (action.type) {
      case LOAD_PODCASTS:
        return { podcasts: [ {_id: "dh232j4h", title: "Test", audioUrl: "test.com", numberOfListeners: 10, image: "image.com", creationDate: "25 June"} ] }
    }

    return state;
  };
}
