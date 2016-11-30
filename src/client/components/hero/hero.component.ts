/**
 * Created by kaloczidavid on 2016. 11. 23..
 */

import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {Hero} from '../../interfaces/hero.interface';

/*
 * Angular2 dekoratorokat alkalmaz, metaadatokkal latja el a keszitett osztalyt.
 * Ebben a @Component() dekoratorban tarolja azokat az infokat, amit az angular2 hasznal.
 * Innen tudja, hogy a feldekoralt HeroComponent osztalyhoz tartozik a 'hero' selector
 * es a template file (hero.template.html).
 * Ide adhatunk meg meg rengeteg infot, angular.io for more.
 */

@Component({
  selector: 'hero',
  templateUrl: 'hero.template.html',
  styleUrls: ['hero.style.css']
})
export class HeroComponent {
  /*
   * ezen keresztul kap a komponens adatot.
   * templateben ezt a `[data]="ertek"` fajta kifejezessel tudjuk az adatot atadni.
   * Ez is egy dekorator. Dekoraljuk a data adattagot, ami Hero tipusu.
   */
  @Input() data: Hero;
  /*
   * @Output() dekoratorral tudunk egy komponensbol adatot "kipreselni".
   * Az adatok minden esetben egy esemenyen (event) belul utaznak, emiatt
   * ezek minden esetben esemenyelsutokkel (EventEmitter) kell dolgozni.
   */
  @Output() greet = new EventEmitter<Hero>();

  // konstruktor, barmit, amit az osztaly letrehozasakor szeretnenk muvelni.
  constructor() {
    console.log('I\'m alive!');
  }

  // sajat esemeny, amit templateban elerhetunk, meghivhatunk. OOP, lasd prog2.
  onClick() {
    console.log('hello');
    /* this-en kersztul erjuk el az osztaly mezoit.
     * a greet outputunkon keresztul tudunk esemenyeken keresztul barmilyen
     * adatot kidobni. Az event emitter template tipusanak megfelelo adatot
     * kell kidobni az esemenybol.
     * // any tipus midnent szeret, de ajanlott tipusokat/interfeszeket hasznalni
     * az EventEmitter .emit() fuggvenyevel tudjuk elsutni az esemenyt az
     * parameterben megadott adattal.
     */
    this.greet.emit( this.data );
  }
}