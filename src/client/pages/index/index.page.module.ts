/**
 * Created by kaloczidavid on 2016. 10. 08..
 */
import {NgModule} from '@angular/core';

import {IndexPageComponent} from './index.page.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [IndexPageComponent],
  exports: [IndexPageComponent]
})
export class IndexPageModule {
}