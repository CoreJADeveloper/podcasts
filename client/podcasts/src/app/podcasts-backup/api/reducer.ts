// import { PodcastAPIAction, PodcastAPIActions } from './actions';
// import { IPodcastList, PodcastType } from '../model';
// import { indexBy, prop } from 'ramda';
// import { Action } from 'redux';
//
// const INITIAL_STATE: IPodcastList = {
//   podcasts: {},
//   loading: false,
//   error: null,
// };
//
// // A higher-order reducer: accepts an podcast type and returns a reducer
// // that only responds to actions for that particular podcast type.
// // export function createPodcastAPIReducer(podcastType: PodcastType) {
// export function createPodcastAPIReducer() {
//   return function podcastReducer(state: IPodcastList = INITIAL_STATE,
//     a: Action): IPodcastList {
//
//     const action = a as PodcastAPIAction;
//     // if (!action.meta || action.meta.podcastType !== podcastType) {
//     //   return state;
//     // }
//
//     switch (action.type) {
//       case PodcastAPIActions.LOAD_STARTED:
//         return {
//           ...state,
//           podcasts: {},
//           loading: true,
//           error: null,
//         };
//       case PodcastAPIActions.LOAD_SUCCEEDED:
//         return {
//           ...state,
//           podcasts: indexBy(prop('id'), action.payload),
//           loading: false,
//           error: null,
//         };
//       case PodcastAPIActions.LOAD_FAILED:
//         return {
//           ...state,
//           podcasts: {},
//           loading: false,
//           error: action.error,
//         };
//     }
//
//     return state;
//   };
// }
