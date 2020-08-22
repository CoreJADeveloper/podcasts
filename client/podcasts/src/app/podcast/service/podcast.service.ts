import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpService } from './../../shared/http/http.service';
import { PodcastList } from './../model/podcast-list.model';

@Injectable({providedIn: 'root'})
export class PodcastService {
  constructor(private http: HttpService) {}

  find() {
    return this.http.get('podcasts')
    .pipe(
        map((result: any) => result)
    );
  }
}
