/**
 * Created by kaloczidavid on 2016. 10. 08..
 */
import {NgModule} from '@angular/core';

import {CarsPageComponent} from './cars.page.component';
import {CommonModule} from '@angular/common';
import {CarEditorModule} from '../../components/car-row/car-row.module';
import {CarsService} from './cars.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, CarEditorModule, FormsModule],
  declarations: [CarsPageComponent],
  exports: [CarsPageComponent],
  providers: [CarsService]
})
export class CarsPageModule {
}