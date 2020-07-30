import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { createLogger } from 'redux-logger';

import { IAppState } from './store.interface';
import { INITIAL_STATE } from '../podcasts/store/podcasts.data';
import { rootReducer } from './store.reducers';

@NgModule({
  imports: [NgReduxModule],
  providers: [],
})

export class StoreModule {
  constructor(
    public store: NgRedux<IAppState>
  ) {
    store.configureStore(
      rootReducer,
      INITIAL_STATE,
      [ createLogger() ]);
  }
}
