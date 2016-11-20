/**
 * Created by kaloczidavid on 2016. 10. 26..
 */

import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Ownership} from '../../interfaces/ownership.interface';
import {Car} from '../../interfaces/car.interface';
import {Person} from '../../interfaces/person.interface';


@Component({
  selector: 'ownership-row',
  templateUrl: './ownership-row.template.html',
  styleUrls: ['ownership-row.style.css']
})
export class OwnershipEditorComponent {

  @Input() set row(val: Ownership) {
    this.value = val;
  }
  @Input() people: Array<Person>;
  @Input() cars: Array<Car>;
  @Input() carOrig: number;
  value: Ownership;
  edit: boolean = false;
  @Output() save = new EventEmitter<Ownership>();
  @Output() remove = new EventEmitter<boolean>();

  toggle() {
    if (this.edit) {
      console.log(this.value);
      this.save.emit(this.value);
    }
    this.edit = !this.edit;
  }

  del() {
    this.remove.emit(true);
  }
}