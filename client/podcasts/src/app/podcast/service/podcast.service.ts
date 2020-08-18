import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpService } from '../../shared/http/http.service';
import { Podcast } from '../model/podcast.model';

@Injectable({providedIn: 'root'})
export class PodcastService {

    constructor(private http: HttpService) {
    }

    find() {
        return this.http.get('podcasts')
            .pipe(
                map((result: any) => {
                    // let items = [];
                    // for (let item of result.items) {
                    //     items.push(new Course(item));
                    // }
                    // return {items, total: result.total};
                    console.log(result);
                    return result;
                })
            );
    }

    // create(course: Course) {
    //     return this.http.post('courses', course);
    // }
    //
    // update(course: Course) {
    //     return this.http.put(`courses/${course._id}`, course);
    // }
    //
    // delete(id: string) {
    //     return this.http.destroy(`courses/${id}`);
    // }
    //
    // get(id: string) {
    //     return this.http.getModel('courses/' + id, Course, false);
    // }
}
