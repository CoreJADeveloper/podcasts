// import { Injectable } from '@angular/core';
// import { Epic, createEpicMiddleware } from 'redux-observable';
// import { of } from "rxjs";
// import { map, catchError, startWith } from "rxjs/operators";
// // import { of } from 'rxjs/observable/of';
// // import 'rxjs/add/operator/catch';
// // import 'rxjs/add/operator/map';
// // import 'rxjs/add/operator/do';
// // import 'rxjs/add/operator/startWith';
//
// import { IPodcastsAppState } from '../../store/model';
// import { PodcastType } from '../model';
// import { PodcastAPIAction, PodcastAPIActions } from './actions';
// import { PodcastAPIService } from './service';
//
// // const podcastsNotAlreadyFetched = (
// //   podcastType: PodcastType,
// //   state: IPodcastsAppState): boolean => !(
// //     state[podcastType] &&
// //     state[podcastType].podcasts &&
// //     Object.keys(state[podcastType].podcasts).length);
//
// // const actionIsForCorrectPodcastType = (podcastType: PodcastType) =>
// //   (action: PodcastAPIAction): boolean =>
// //     action.meta.podcastType === podcastType;
//
// @Injectable()
// export class PodcastAPIEpics {
//   constructor(
//     private service: PodcastAPIService,
//     private actions: PodcastAPIActions,
//   ) {}
//
//   // public createEpic(podcastType: PodcastType) {
//   public createEpic() {
//     // return createEpicMiddleware(this.createLoadPodcastEpic(podcastType));
//     return createEpicMiddleware(this.createLoadPodcastEpic());
//   }
//
//   // private createLoadPodcastEpic(podcastType: PodcastType): Epic<PodcastAPIAction, IPodcastsAppState> {
//   //   return (action$, store) => action$
//   //     .ofType(PodcastAPIActions.LOAD_PODCASTS)
//   //     .filter(action => actionIsForCorrectPodcastType(podcastType)(action))
//   //     .filter(() => podcastsNotAlreadyFetched(podcastType, store.getState()))
//   //     .switchMap(() => this.service.getAll(podcastType)
//   //       .map(data => this.actions.loadSucceeded(podcastType, data))
//   //       .catchError(response => of(this.actions.loadFailed(podcastType, {
//   //         status: '' + response.status,
//   //       })))
//   //       .startWith(this.actions.loadStarted(podcastType)));
//   // }
//
//   private createLoadPodcastEpic(): Epic<PodcastAPIAction, IPodcastsAppState> {
//     return (action$, store) => action$
//       .ofType(PodcastAPIActions.LOAD_PODCASTS)
//       // .filter(action => actionIsForCorrectPodcastType()(action))
//       // .filter(() => podcastsNotAlreadyFetched(store.getState()))
//       .switchMap(() => this.service.getAll()
//         .map(data => this.actions.loadSucceeded(data))
//         .catchError(response => of(this.actions.loadFailed({
//           status: '' + response.status,
//         })))
//         .startWith(this.actions.loadStarted()));
//   }
// }
