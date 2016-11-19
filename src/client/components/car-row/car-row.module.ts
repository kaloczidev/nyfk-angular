/**
 * Created by kaloczidavid on 2016. 10. 26..
 */

import {NgModule} from '@angular/core';

import {CarEditorComponent} from './car-row.component';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, HttpModule, FormsModule],
  declarations: [CarEditorComponent],
  exports: [CarEditorComponent]
})
export class CarEditorModule {
}