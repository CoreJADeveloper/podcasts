import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable';

import { HttpClient } from '@angular/common/http';
import { of } from "rxjs";
import { map, catchError, startWith } from "rxjs/operators";

// import { PODCAST_TYPES } from '../podcasts/model';
// import { PodcastAPIEpics } from '../podcasts/api/epics';

import { IPodcastsAppState } from './model';

@Injectable()
export class RootEpics {
  constructor(private http: HttpClient) {}

  public createEpics() {
    // return [
    //   this.podcastEpics.createEpic()
    // ];

    // return createEpicMiddleware(this.createLoadPodcastEpic());
  }

  createLoadPodcastEpic() {
    // return (action$, store) => action$
    //   .ofType(PodcastAPIActions.LOAD_PODCASTS)
    //   // .filter(action => actionIsForCorrectPodcastType()(action))
    //   // .filter(() => podcastsNotAlreadyFetched(store.getState()))
    //   .switchMap(() => this.service.getAll()
    //     .map(data => this.actions.loadSucceeded(data))
    //     .catchError(response => of(this.actions.loadFailed({
    //       status: '' + response.status,
    //     })))
    //     .startWith(this.actions.loadStarted()));

    // return this.http.get('http://www.mocky.io/v2/59200c34110000ce1a07b598')
    //   .pipe(map(records => records));
  }
}
