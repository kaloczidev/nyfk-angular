/**
 * Created by kaloczidavid on 2016. 10. 12..
 */

import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.template.html'
})
export class AppTableComponent implements OnInit {

  @Input() rows = [4,1,3,4];
  constructor() {
  }

  ngOnInit() {
  }

}