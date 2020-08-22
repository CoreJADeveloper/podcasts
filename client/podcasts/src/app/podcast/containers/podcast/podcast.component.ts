import { Component, OnInit, OnDestroy } from '@angular/core';

// SERVICES
import { PodcastService } from './../../service/podcast.service';

// NGRX
import { Store } from '@ngrx/store';
import { AppState } from './../../../shared/redux/app.reducer';
import { Podcast } from './../../model/podcast.model';
import { podcastActionFactory, PodcastActionTypes, ListPodcasts } from './../../actions/podcast.actions';

// RXJS
import { Subscription, Observable, Subject, timer, fromEvent } from 'rxjs';
import { map } from "rxjs/operators";

// COMPONENT
@Component({
	selector: 'podcasts',
	templateUrl: 'podcast.component.html',
	styleUrls: ['./podcast.component.scss']
})

// CLASS
export class PodcastComponent implements OnInit {
	public podcasts$: Observable<any>;

	featured$ = new Subject<Podcast[]>();
	trending$ = new Subject<Podcast[]>();
	highlighted$ = new Subject<Podcast[]>();
	favorite$ = new Subject<Podcast[]>();

	playAudio: any = {};

  private _subscriptions: any = new Subscription();

	constructor(
		private store: Store<AppState>
  ) {
		this.podcasts$ = this.store.select('podcast');
	}

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
    this.store.dispatch(podcastActionFactory.create<ListPodcasts>(PodcastActionTypes.LIST_PODCASTS, {}));
  }

	triggerAudioPlayback(i: number){
		this.playAudio = {};

		const numbers = timer(300);
		this._subscriptions.add(numbers.subscribe(x => this.playAudio[i] = !this.playAudio[i]));
	}

	getKey(_, podcast: Podcast) {
    return podcast._id;
  }
}
