/**
 * Created by kaloczidavid on 2016. 10. 25..
 */

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class PeoplePageService {

  private path = 'people';

  constructor(private http: Http) {
  }
  getAllPeople() {
    return this.http.get(this.path).map(this.processResponse);
  }
  processResponse( res: Response){
    let body = res.json();
    return body || {};
  }
}