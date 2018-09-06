import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import {Transaction} from '../model/Transaction';

@Injectable()
export class TransactionsService {

  constructor(private _http: Http) { }

  get(): Observable<Transaction[]> {
    return this._http.get('../../../assets/transactions.json')
      .map(res => res.json().data)
      .do(console.log);
  }
}
