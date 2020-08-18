import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { ActionTemplate, ErrorAction } from '../../shared/redux/action-factory';
import { PodcastService } from '../service/podcast.service';
import { podcastActionFactory, PodcastActionTypes, DefaultPodcast, ListPodcasts, ListPodcastsSuccess } from '../actions/podcast.actions';
import { Podcast } from '../model/podcast.model';

@Injectable()
export class PodcastEffects {

    constructor(private actions: Actions, private podcastService: PodcastService) {
    }

    @Effect()
    list: Observable<any> = this.actions.pipe(
        ofType(PodcastActionTypes.LIST_PODCASTS),
        exhaustMap((action: ActionTemplate<ListPodcasts>) => {
            return this.podcastService.find().pipe(
                map((result: { featured: Array<Podcast>, trending: Array<Podcast>,
                  favorite: Array<Podcast>, highlighted: Array<Podcast> }) => {
                    return podcastActionFactory.create<ListPodcastsSuccess>(PodcastActionTypes.LIST_PODCASTS_SUCCESS, {
                        featured: result.featured,
                        trending: result.trending,
                        favorite: result.favorite,
                        highlighted: result.highlighted,
                    });
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
            // this.message.create('error', action.payload.error);
        })
    );
}
