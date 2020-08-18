import { Component, OnInit, OnDestroy } from '@angular/core';

// SERVICES
import { PodcastService } from '../../service/podcast.service';

// SUBSCRIPTIONS
import { Subscription, Observable, Subject, timer } from 'rxjs';
import { map } from "rxjs/operators";

// COMPONENT
@Component({
	selector: 'podcasts',
	templateUrl: 'podcast.component.html',
	styleUrls: ['./podcast.component.scss']
})

// CLASS
export class PodcastComponent {
	// @select('podcasts')
  // readonly podcasts$: Observable<any>;
	//
	// featured$ = new Subject<IPodcast[]>();
	// trending$ = new Subject<IPodcast[]>();
	// highlighted$ = new Subject<IPodcast[]>();
	// favorite$ = new Subject<IPodcast[]>();
	//
	// playAudio: any = {};
	//
  // private _subscriptions: any = new Subscription();
	//
	// constructor(
  //   private _podcastService: PodcastService,
  //   private ngRedux: NgRedux<IAppState>
  // ) {}
	//
	// ngOnInit() {
  //   this._getPodcasts();
	// 	this._getPodcastsSubscriptions();
  // }
	//
	// ngOnDestroy(){
	// 	this._subscriptions.unsubscribe();
	// }
	//
	// private _getPodcastsSubscriptions(){
	// 	this._subscriptions.add(this.podcasts$.subscribe((res) => {
	// 		if(res){
	// 			this.featured$.next(res.podcasts['featured']);
	// 			this.trending$.next(res.podcasts['trending']);
	// 			this.highlighted$.next(res.podcasts['highlighted']);
	// 			this.favorite$.next(res.podcasts['favorite']);
	// 		}
	// 	}))
	// }
	//
  // private _getPodcasts(){
  //   this.ngRedux.dispatch({type: LOAD_STARTED});
  //   this._subscriptions.add(this._podcastsService.getPodcasts().subscribe((res) => {
  //     if(res){
  //       this.ngRedux.dispatch({type: LOAD_SUCCEEDED, podcasts: res});
  //     }
  //   }, (error) => {
	// 		this.ngRedux.dispatch({type: LOAD_FAILED, error: error});
	// 	}));
  // }
	//
	// triggerAudioPlayback(i: number){
	// 	this.playAudio = {};
	//
	// 	const numbers = timer(300);
	// 	this._subscriptions.add(numbers.subscribe(x => this.playAudio[i] = !this.playAudio[i]));
	// }
	//
	// getKey(_, podcast: IPodcast) {
  //   return podcast._id;
  // }
}
