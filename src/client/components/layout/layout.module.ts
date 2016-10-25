/**
 * Created by kaloczidavid on 2016. 10. 09..
 */

import {NgModule} from '@angular/core';

import {LayoutComponent} from './layout.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {
}