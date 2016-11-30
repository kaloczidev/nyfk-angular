/**
 * Created by kaloczidavid on 2016. 11. 23..
 */

import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: 'hero.template.html'
})
export class HeroComponent {
  @Input() adat: any;

  @Output() udv = new EventEmitter<any>();
  constructor() {
  }
  kattintas() {
    console.log('hello');
    this.udv.emit( this.adat );
  }
}