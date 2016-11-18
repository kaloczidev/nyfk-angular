/**
 * Created by kaloczidavid on 2016. 10. 26..
 */

import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector:   'row-editor',
  templateUrl: 'row-editor.template.html',
  styleUrls: ['./row-editor.style.css']
})
export class RowEditorComponent {

  @Input() field: any;

  @Input() set value(val: any) {
    this._value = val;
  };

  private _value: any;

  @Output() save = new EventEmitter<any>();

  send() {
    this.save.emit(this._value);
  }

}