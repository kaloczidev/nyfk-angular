/**
 * Created by kaloczidavid on 2016. 11. 23..
 */

import { NgModule } from '@angular/core';

import {HeroComponent} from './hero.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports:      [CommonModule],
  declarations: [HeroComponent],
  exports:      [HeroComponent]
})
export class HeroModule { }