/**
 * Created by kaloczidavid on 2016. 10. 08..
 */

import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {IndexPageComponent} from "../../pages/index/index.page.component";
import {CarsPageComponent} from "../../pages/cars/cars.page.component";
import {PeoplePageComponent} from "../../pages/people/people.page.component";
import {CarsPageModule} from "../../pages/cars/cars.page.module";
import {PeoplePageModule} from "../../pages/people/people.page.module";
import {IndexPageModule} from "../../pages/index/index.page.module";

import {LayoutModule} from "../layout/layout.module";

const routes = [
  {path: '', component: IndexPageComponent},
  {path: 'people', component: PeoplePageComponent},
  {path: 'cars', component: CarsPageComponent},
];

@NgModule({
  imports: [
    LayoutModule,
    BrowserModule,
    CommonModule,
    IndexPageModule,
    CarsPageModule,
    PeoplePageModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}