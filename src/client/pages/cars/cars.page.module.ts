/**
 * Created by kaloczidavid on 2016. 10. 08..
 */
import {NgModule} from '@angular/core';

import {CarsPageComponent} from './cars.page.component';
import {AppTableModule} from '../../components/table/app-table.module';

@NgModule({
  imports     : [AppTableModule],
  declarations: [CarsPageComponent],
  exports     : [CarsPageComponent]
})
export class CarsPageModule {
}