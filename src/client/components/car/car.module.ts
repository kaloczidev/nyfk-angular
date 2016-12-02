/**
 * Created by kaloczidavid on 2016. 10. 26..
 */

import {NgModule} from '@angular/core';

import {CarComponent} from './car.component';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, HttpModule, FormsModule],
  declarations: [CarComponent],
  exports: [CarComponent]
})
export class CarEditorModule {
}