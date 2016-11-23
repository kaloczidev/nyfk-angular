/**
 * Created by kaloczidavid on 2016. 10. 08..
 */

import {Component, ViewEncapsulation} from '@angular/core';
import {Http} from '@angular/http';

import {Hero} from '../../interfaces/hero.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.template.html',
  styleUrls: ['./app.style.css', '../../public/styles.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  heroList: Array<Hero> = [];
  szoveg: string = "valami";

  constructor(private http: Http) {
    // load heroes

    /*sends a HTTP GET on hero

     this.http.get('hero')    => router.get('/hero', ... );
     this.http.get('hero/1')    => router.get('/hero/:id', ... );

     this.http.put('hero')    => router.put('/hero', ... );
     this.http.post('hero')   => router.post('/hero', ... );
     this.http.del('hero')    => router.del('/hero', ... );

     */

    this.http
      .get('hero')
      .map(res => res.json())
      .subscribe((result) => {
        console.log(result);
        this.heroList = result.data || [];
      });
  }

  public foo() {
    console.log('111');
  }

}
