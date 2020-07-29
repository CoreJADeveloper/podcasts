import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";

import { IPodcast } from './podcasts.interface';

@Injectable()
export class PodcastAPIService {
  constructor(private http: HttpClient) {}

  getAll = () =>
    this.http.get('http://www.mocky.io/v2/59200c34110000ce1a07b598').pipe(map(records => records));
}
