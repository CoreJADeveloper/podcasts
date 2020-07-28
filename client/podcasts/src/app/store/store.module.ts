import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { createLogger } from 'redux-logger';

import { IAppState, INITIAL_STATE } from './store.interface';
import { rootReducer } from './store.reducers';
// import { RootEpics } from './epics';

@NgModule({
  imports: [NgReduxModule],
  providers: [],
})

export class StoreModule {
  constructor(
    public store: NgRedux<IAppState>,
    // rootEpics: RootEpics,
  ) {
    store.configureStore(
      rootReducer,
      INITIAL_STATE,
      [ createLogger() ]);
  }
}
