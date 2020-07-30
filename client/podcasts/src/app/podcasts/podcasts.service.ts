import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RXJS
import { throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

// ENV
import { environment } from '../../environments/environment';

// ROUTES
const api = `${environment.api}`;

@Injectable()
export class PodcastsService {
	constructor(private http: HttpClient) { }

  getPodcasts() {
    return this.http.get(`${api}/podcasts`)
										.pipe(map((res: any) => res))
										.pipe(catchError(this._errorHandler));
  }

	private _errorHandler(error: Response) {
		return throwError(error || 'Server Error');
	}
}
