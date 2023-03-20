import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerType } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _url : string = "./assets/data/customers.json";

  constructor(private _http: HttpClient) { }

  getCustomers():Observable<CustomerType[]>{
    return this._http.get<CustomerType[]>(this._url)
  }
}
