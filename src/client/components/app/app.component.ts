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
  // helyi valtozok letrehozasa, ES6 class
  title: string = "Heroes";

  constructor(private http: Http) {

    /*
     * angular/http methodusok => szerveren az adott route-ra erkezik.
     * this.http.get('hero')    => router.get('/hero', ... );
     * this.http.get('hero/1')    => router.get('/hero/:id', ... );
     *
     * this.http.put('hero')    => router.put('/hero', ... );
     * this.http.post('hero')   => router.post('/hero', ... );
     * this.http.del('hero')    => router.del('/hero', ... );
     *
     * Ez egy observable (helló korszprog!), erre feliratkozunk, es varjuk
     * a szerver valaszat, ez a megadott callbackben (arrow function) lesz
     * lathato.
     */

    this.http
      .get('hero')              // adott http metodus valasztasa
      .map(res => res.json())   // feldolgozzuk a valaszt.
      .subscribe((result) => {  // feliratkozunk a valaszra, callbackban a valasz
        console.log(result);
        this.heroList = result.data;
      });
  }

  /* itt lathato, hogy a fuggveny bemenete az a templateban a `$event`, viszont
   * itt mar csak az adatot varjuk. Hasznaljunk interfeszeket!
   */
  udvozles(esemeny: Hero) {
    console.log('udv az esemenybol, ' +
      esemeny.name + ' vagyok.');

    this.http
    // postnal a http keresnek a torzset is meg kell adni, es masodik parameterkent.
      .post('hero', {uzenet: 'szoveg a szervernek'})
      .map(res => res.json())
      .subscribe(result => {
        // szerver valaszol itt a responseban
        console.log('szerver valasza:');
        console.log(result);
      });

  }

}
