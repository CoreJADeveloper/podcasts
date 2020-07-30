import { Component, OnInit, OnDestroy } from '@angular/core';

// SERVICES
import { PodcastsService } from './podcasts.service';

// SUBSCRIPTIONS
import { Subscription, Observable, Subject, timer } from 'rxjs';
import { map } from "rxjs/operators";

// REDUX
import { NgRedux, select, select$ } from '@angular-redux/store';

// STORE
import { LOAD_STARTED, LOAD_SUCCEEDED, LOAD_FAILED } from './store/podcasts.actions';
import { IAppState } from '../store/store.interface';
import { IPodcast } from './store/podcasts.interface';

// COMPONENT
@Component({
	selector: 'podcasts',
	templateUrl: 'podcasts.component.html',
	styleUrls: ['./podcasts.component.scss']
})

// CLASS
export class PodcastsComponent implements OnInit, OnDestroy {
	@select('podcasts')
  readonly podcasts$: Observable<any>;

	featured$ = new Subject<IPodcast[]>();
	trending$ = new Subject<IPodcast[]>();
	highlighted$ = new Subject<IPodcast[]>();
	favorite$ = new Subject<IPodcast[]>();

	playAudio: any = {};

  private _subscriptions: any = new Subscription();

	constructor(
    private _podcastsService: PodcastsService,
    private ngRedux: NgRedux<IAppState>
  ) {}

	ngOnInit() {
    this._getPodcasts();
		this._getPodcastsSubscriptions();
  }

	ngOnDestroy(){
		this._subscriptions.unsubscribe();
	}

	private _getPodcastsSubscriptions(){
		this._subscriptions.add(this.podcasts$.subscribe((res) => {
			if(res){
				this.featured$.next(res.podcasts['featured']);
				this.trending$.next(res.podcasts['trending']);
				this.highlighted$.next(res.podcasts['highlighted']);
				this.favorite$.next(res.podcasts['favorite']);
			}
		}))
	}

  private _getPodcasts(){
    this.ngRedux.dispatch({type: LOAD_STARTED});
    this._subscriptions.add(this._podcastsService.getPodcasts().subscribe((res) => {
      if(res){
        this.ngRedux.dispatch({type: LOAD_SUCCEEDED, podcasts: res});
      }
    }, (error) => {
			this.ngRedux.dispatch({type: LOAD_FAILED, error: error});
		}));
  }

	triggerAudioPlayback(i: number){
		this.playAudio = {};

		const numbers = timer(300);
		this._subscriptions.add(numbers.subscribe(x => this.playAudio[i] = !this.playAudio[i]));
	}

	getKey(_, podcast: IPodcast) {
    return podcast._id;
  }
}
