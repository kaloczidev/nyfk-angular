/**
 * Created by kaloczidavid on 2016. 10. 08..
 */
import {NgModule} from '@angular/core';

import {PeoplePageComponent} from './people.page.component';
import {PeoplePageService} from './people.page.service';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [CommonModule, HttpModule],
  declarations: [PeoplePageComponent],
  exports: [PeoplePageComponent],
  providers: [PeoplePageService]
})
export class PeoplePageModule {
}