import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { IBitcoin } from './IBitcoin.model';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

 private _url: string = 'https://api.coindesk.com/v1/bpi/currentprice.json'

 constructor(private _http:HttpClient){}

 getBitcoinData(): Observable<IBitcoin[]>{
  return this._http.get<IBitcoin[]>(this._url);
 }
}
