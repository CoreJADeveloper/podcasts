import { Component, OnInit } from '@angular/core';

// SERVICES
import { PodcastsService } from './podcasts.service';

// SUBSCRIPTIONS
import { Subscription } from 'rxjs';

// REDUX
import { NgRedux, select } from '@angular-redux/store';

// STORE
import { LOAD_STARTED, LOAD_SUCCEEDED, LOAD_FAILED } from './store/podcasts.actions';
import { IAppState } from '../store/store.interface';

// COMPONENT
@Component({
	selector: 'podcasts',
	templateUrl: 'podcasts.component.html',
	styleUrls: ['./podcasts.component.scss']
})

// CLASS
export class PodcastsComponent implements OnInit {
  private _subscriptions: any = new Subscription();

	constructor(
    private _podcastsService: PodcastsService,
    private ngRedux: NgRedux<IAppState>
  ) {}

	ngOnInit() {
    this._getPodcasts();
  }

  private _getPodcasts(){
    this.ngRedux.dispatch({type: LOAD_STARTED});
    this._subscriptions.add(this._podcastsService.getPodcasts().subscribe((res) => {
      if(res){
        this.ngRedux.dispatch({type: LOAD_SUCCEEDED, podcasts: res});
      }
    }));
  }
}
