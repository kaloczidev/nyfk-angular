/**
 * Created by kaloczidavid on 2016. 10. 26..
 */

import {NgModule} from '@angular/core';

import {RowEditorComponent} from './row-editor.component';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [CommonModule, HttpModule],
  declarations: [RowEditorComponent],
  exports: [RowEditorComponent]
})
export class RowEditorModule {
}