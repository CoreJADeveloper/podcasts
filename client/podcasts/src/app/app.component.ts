import { Component } from '@angular/core';

import { NgRedux, select } from '@angular-redux/store';

import { IAppState } from './store/store.interface';
import { PodcastsAPIActions } from './podcasts/podcasts.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'podcasts';

  @select() podcasts;

  constructor(private podcastsActions: PodcastsAPIActions){
    // this.ngRedux.dispatch({type: LOAD_PODCASTS});
    this.podcastsActions.loadPodcasts();
  }
}
