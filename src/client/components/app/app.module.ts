/**
 * Created by kaloczidavid on 2016. 10. 08..
 */

import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {CommonModule} from "@angular/common";

import {AppComponent} from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}