/**
 * Created by kaloczidavid on 2016. 10. 08..
 */

import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {CommonModule} from "@angular/common";

import {HttpModule} from "@angular/http";

import {AppComponent} from './app.component';

import {HeroModule} from '../hero/hero.module';
// https://github.com/kaloczidev/nyfk-angular


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    HeroModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}