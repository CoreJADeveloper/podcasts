import { Component } from '@angular/core';

import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'podcasts';

  @select() podcasts;

  constructor(){
    // this.ngRedux.dispatch({type: LOAD_PODCASTS});
    // this.podcastsActions.loadPodcasts();
  }
}
