export const LOAD_PODCASTS = 'LOAD_PODCASTS';

import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

@Injectable()
export class PodcastsAPIActions {
  static readonly LOAD_PODCASTS = 'LOAD_PODCASTS';

  @dispatch()
  loadPodcasts = () => ({
    type: PodcastsAPIActions.LOAD_PODCASTS,
  });
}
