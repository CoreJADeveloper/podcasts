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
    return this.http.get('http://www.mocky.io/v2/59200c34110000ce1a07b598')
										.pipe(map((res: any) => res))
										.pipe(catchError(this._errorHandler));
  }

	private _errorHandler(error: Response) {
		return throwError(error || 'Server Error');
	}
}
