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

/**
 * Importaljuk az adott epitoelem fuggosegeit. listazva:
 *
 *
 * HeroModule: emiatt hasznalhato az abban letrehozott hero component.
 *
 * CommonModule: Ez a modul teszi lehetove, hogy kulonfele
 * template logikat hasznaljunk pl.: *ngIf, *ngFor.
 *
 * BrowserModule: Ahhoz, hogy az alkalmazas bongeszoben fusson, az angularos
 * dolgokat intezi a hatterben.
 *
 * HttpModule: http keresekhez hasznaljuk.
 */

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