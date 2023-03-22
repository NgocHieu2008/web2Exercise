import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { IApi } from './IApi.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _url: string = 'https://api.publicapis.org/entries'

 constructor(private _http:HttpClient){}

 getApiData(): Observable<IApi[]>{
  return this._http.get<IApi[]>(this._url);
 }
}
