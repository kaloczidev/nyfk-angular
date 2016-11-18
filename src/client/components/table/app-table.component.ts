/**
 * Created by kaloczidavid on 2016. 10. 12..
 */

import {Component} from '@angular/core';
import {Input} from '@angular/core';
import any = jasmine.any;

@Component({
  selector: 'app-table',
  templateUrl: './app-table.template.html'
})
export class AppTableComponent {

  @Input() rows = [4, 1, 3, 4];

  constructor() {
  }
}