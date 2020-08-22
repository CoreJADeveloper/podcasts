import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { ActionTemplate, ErrorAction } from './../../shared/redux/action-factory';
import { PodcastService } from './../service/podcast.service';
import { podcastActionFactory, PodcastActionTypes, DefaultPodcast, ListPodcasts, ListPodcastsSuccess } from './../actions/podcast.actions';
import { PodcastList } from './../model/podcast-list.model';

@Injectable()
export class PodcastEffects {
  constructor(private actions: Actions, private podcastService: PodcastService) {
  }

  @Effect()
  list: Observable<any> = this.actions.pipe(
    ofType(PodcastActionTypes.LIST_PODCASTS),
    exhaustMap((action: ActionTemplate<ListPodcasts>) => {
      return this.podcastService.find().pipe(
        map((result: { podcasts: PodcastList }) => {
          return podcastActionFactory.create<ListPodcastsSuccess>(PodcastActionTypes.LIST_PODCASTS_SUCCESS, result);
        }),
        catchError((error: string) => {
          return of(podcastActionFactory.create(PodcastActionTypes.LIST_PODCASTS_FAILURE, {error}));
        })
      );
    })
  );

  @Effect({dispatch: false})
  error: Observable<any> = this.actions.pipe(
    ofType(
      PodcastActionTypes.LIST_PODCASTS_FAILURE),
    tap((action: ActionTemplate<ErrorAction>) => {
      // EMPTY
    })
  );
}
