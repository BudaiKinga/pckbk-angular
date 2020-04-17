import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IHouse } from './house';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HouseListService {
    private houseListUrl = 'http://localhost:8080/kbk/HouseList';

    constructor(private httpClient: HttpClient) {

    }

    getHouses(): Observable<IHouse[]> {
        return this.httpClient.get<IHouse[]>(this.houseListUrl).pipe(
            tap(data => console.log('Received: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    addNewHouse(url: string): Observable<Object>{
        return this.httpClient.get<Object>(url).pipe (
            tap(data => console.log('rec: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = err.message;
        return throwError(errorMessage);
    }
}