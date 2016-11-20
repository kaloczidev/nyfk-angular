/**
 * Created by kaloczidavid on 2016. 10. 08..
 */
import {NgModule} from '@angular/core';

import {OwnershipPageComponent} from './ownership.page.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {OwnershipEditorModule} from '../../components/ownership-row/ownership-row.module';
import {OwnershipsService} from './ownership.service';

@NgModule({
  imports: [CommonModule, FormsModule, OwnershipEditorModule],
  declarations: [OwnershipPageComponent],
  exports: [OwnershipPageComponent],
  providers: [OwnershipsService]
})
export class OwnershipPageModule {
}