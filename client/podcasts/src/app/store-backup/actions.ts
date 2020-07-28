import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
// import { IPodcast } from './model';

// Flux-standard-action gives us stronger typing of our actions.
// type Payload = IPodcast[];
// interface MetaData { podcastType: PodcastType; };
// export type PodcastAPIAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class PodcastAPIActions {
  static readonly LOAD_PODCASTS = 'LOAD_PODCASTS';
  static readonly LOAD_STARTED = 'LOAD_STARTED';
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
  static readonly LOAD_FAILED = 'LOAD_FAILED';

  @dispatch()
  loadPodcasts = () => ({
    type: PodcastAPIActions.LOAD_PODCASTS
  });
}
