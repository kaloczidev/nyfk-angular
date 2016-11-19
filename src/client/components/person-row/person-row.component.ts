/**
 * Created by kaloczidavid on 2016. 10. 26..
 */

import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Person} from '../../interfaces/person.interface';

@Component({
  selector: 'person-row',
  templateUrl: 'person-row.template.html',
  styleUrls: ['person-row.style.css']
})
export class PersonEditorComponent {

  @Input() set row(val: Person) {
    this.value = val;
  }

  value: Person;
  edit: boolean = false;
  @Output() save = new EventEmitter<Person>();
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