/**
 * Created by kaloczidavid on 2016. 10. 25..
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class PeoplePageService {

  private path = 'people';

  constructor(private http: Http) {
  }

  getAllPeople() {
    return this.http.get(this.path).map(res => res.json());
  }

  addPeople(name: string) {
    let headers = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers});

    console.log('posting', name);
    let data = {
      id: 123,
      name: 'asdas'
    };
    return this.http.post('people/123', data, options)
      .map( res =>  res.json())
      .catch(this.handleError);
  }


  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err  = body.error || JSON.stringify(body);
      errMsg     = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}


