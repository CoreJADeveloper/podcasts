import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

// ENV
import { environment } from '../../../environments/environment';

// ROUTES
const BASE_URL = `${environment.api}`;

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {
    }

    private modelResult(result: any, model: any) {
        if (!result) {
            return result;
        }
        return new model(result);
    }

    private catchError(error: any): Observable<string> {
        if (!error.error) {
            console.error(error);
            return throwError(error);
        }
        let message = error.error.message;
        if (!message) {
            for (let field in error.error) {
                message = error.error[field];
                break;
            }
        }
        console.error(message);
        return throwError(message);
    }

    postModel(url: string, model: any, prams: any): Observable<any> {
        if (!url) {
            throw new Error('empty url');
        }
        return this.http.post(`${BASE_URL}/${url}`, prams).pipe(
            map((result: any) => this.modelResult(result, model)),
            catchError(this.catchError)
        );
    }

    putModel(url: string, model: any, prams: any): Observable<any> {
        if (!url) {
            throw new Error('empty url');
        }
        return this.http.put(`${BASE_URL}/${url}`, prams).pipe(
            map((result: any) => this.modelResult(result, model)),
            catchError(this.catchError)
        );
    }

    getModel(url: string, model: any, multi = false): Observable<any> {
        if (!url) {
            throw new Error('empty url');
        }
        return this.http.get(`${BASE_URL}/${url}`).pipe(
            map((result: any) => {
                if (!multi) {
                    return this.modelResult(result, model);
                } else {
                    const models = [];
                    for (const item of result) {
                        models.push(this.modelResult(item, model));
                    }
                    return models;
                }
            }),
            catchError(this.catchError)
        );
    }

    put(url: string, prams: any): Observable<any> {
        if (!url) {
            throw new Error('empty url');
        }
        return this.http.put(`${BASE_URL}/${url}`, prams).pipe(
            map((result: any) => result),
            catchError(this.catchError)
        );
    }

    post(url: string, prams: any): Observable<any> {
        if (!url) {
            throw new Error('empty url');
        }
        return this.http.post(`${BASE_URL}/${url}`, prams).pipe(
            map((result: any) => result),
            catchError(this.catchError)
        );
    }

    get(url: string): Observable<any> {
        if (!url) {
            throw new Error('empty url');
        }
        return this.http.get(`${BASE_URL}/${url}`).pipe(
            map((result: any) => result),
            catchError(this.catchError)
        );
    }

    getWithParams(url: string, params: any): Observable<any> {
        if (!url) {
            throw new Error('empty url');
        }
        let parameters = new HttpParams();
        for (let param in params) {
            parameters.append(param, params[param]);
        }
        return this.http.get(`${BASE_URL}/${url}`, {params}).pipe(
            map((result: any) => result),
            catchError(this.catchError)
        );
    }

    destroy(url: string): Observable<any> {
        if (!url) {
            throw new Error('empty url');
        }
        return this.http.delete(`${BASE_URL}/${url}`).pipe(
            map((result: any) => result),
            catchError(this.catchError)
        );
    }
}
