/**
 * Created by kaloczidavid on 2016. 10. 08..
 */
import {NgModule} from '@angular/core';

import {PeoplePageComponent} from './people.page.component';
import {PeoplePageService} from './people.page.service';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {AppTableModule} from '../../components/table/app-table.module';
import {RowEditorModule} from '../../components/row-editor/row-editor.module';

@NgModule({
  imports: [CommonModule, HttpModule, AppTableModule, RowEditorModule],
  declarations: [PeoplePageComponent],
  exports: [PeoplePageComponent],
  providers: [PeoplePageService]
})
export class PeoplePageModule {
}