/**
 * Created by kaloczidavid on 2016. 11. 20..
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {Car} from '../../interfaces/car.interface';
import {Person} from '../../interfaces/person.interface';
import {Ownership} from '../../interfaces/ownership.interface';

@Injectable()
export class OwnershipsService {

  headers = new Headers({"Content-Type": "application/json"});
  options = new RequestOptions({headers: this.headers});
  path = 'ownerships';

  constructor(private http: Http) {
  }

  list() {
    return this.http.get(this.path)
      .map(res => res.json())
      .catch(this.handleError);
  }

  add(data: Ownership) {
    return this.http.put(this.path, data, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  get(id: number) {
    return this.http.get(this.path + `/${id}`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  update(data: Ownership) {
    return this.http.post(this.path + `/${data.id}`, data, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  del(id: number) {
    return this.http.delete(this.path + `/${id}`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  public getPeople() {
    return this.http.get(`people`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  public getCars() {
    return this.http.get(`cars`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }
}


