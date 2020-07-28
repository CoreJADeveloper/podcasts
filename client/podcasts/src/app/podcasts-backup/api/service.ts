// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs/Observable';
// // import 'rxjs/add/operator/map';
// // import 'rxjs/add/observable/of';
//
// import { map } from "rxjs/operators";
// import { Observable, of } from "rxjs";
//
// import { PODCAST_TYPES, PodcastType, IPodcast, fromServer } from '../model';
//
// // A fake API on the internets.
// const URLS = {
//   [PODCAST_TYPES.CATEGORIES]: 'http://www.mocky.io/v2/59200c34110000ce1a07b598'
// };
//
// @Injectable()
// export class PodcastAPIService {
//   constructor(private http: HttpClient) {}
//
//   getAll = (): Observable<IPodcast[]> =>
//     this.http.get('http://www.mocky.io/v2/59200c34110000ce1a07b598')
//       // .pipe(map(resp => resp.json()))
//       .pipe(map(records => records.map(fromServer)));
// }
