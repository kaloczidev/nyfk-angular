/**
 * Created by kaloczidavid on 2016. 10. 08..
 */
import {NgModule} from '@angular/core';

import {PeoplePageComponent} from './people.page.component';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RowEditorModule} from '../../components/person-row/person-row.module';
import {PeopleService} from './people.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, HttpModule, RowEditorModule, FormsModule],
  declarations: [PeoplePageComponent],
  exports: [PeoplePageComponent],
  providers: [PeopleService]
})
export class PeoplePageModule {
}