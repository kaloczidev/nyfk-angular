/**
 * Created by kaloczidavid on 2016. 11. 23..
 */

import {Component, Input} from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: 'hero.template.html'
})
export class HeroComponent {

  @Input() adat: any;

  constructor() {
  }
}