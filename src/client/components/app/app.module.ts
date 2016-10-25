/**
 * Created by kaloczidavid on 2016. 10. 08..
 */

import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {IndexPageComponent} from "../../pages/index/index.page.component";
import {IndexPageModule} from "../../pages/index/index.page.module";
import {CarsPageComponent} from "../../pages/cars/cars.page.component";
import {OwnershipPageComponent} from "../../pages/ownership/ownership.page.component";
import {CarsPageModule} from "../../pages/cars/cars.page.module";
import {OwnershipPageModule} from "../../pages/ownership/ownership.page.module";
import {PeoplePageModule} from "../../pages/people/people.page.module";
import {PeoplePageComponent} from "../../pages/people/people.page.component";
import {LayoutModule} from "../layout/layout.module";

const routes = [
  {path: '', component: IndexPageComponent},
  {path: 'people', component: PeoplePageComponent},
  {path: 'cars', component: CarsPageComponent},
  {path: 'ownership', component: OwnershipPageComponent},
];

@NgModule({
  imports: [
    LayoutModule,
    BrowserModule,
    CommonModule,
    IndexPageModule,
    CarsPageModule,
    OwnershipPageModule,
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