/**
 * Created by kaloczidavid on 2016. 10. 08..
 */
import {NgModule} from '@angular/core';

import {CarsPageComponent} from './cars.page.component';

@NgModule({
  declarations: [CarsPageComponent],
  exports     : [CarsPageComponent]
})
export class CarsPageModule {
}