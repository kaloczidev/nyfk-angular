/**
 * Created by kaloczidavid on 2016. 10. 26..
 */

import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Person} from '../../interfaces/person.interface';

@Component({
  selector: 'person',
  templateUrl: 'person.template.html',
  styleUrls: ['person.style.css']
})
export class PersonComponent {

  @Input() data: Person;

  edit: boolean = false;

  @Output() save = new EventEmitter<Person>();
  @Output() remove = new EventEmitter<number>();

  toggle() {
    if (this.edit) {
      console.log(this.data);
      this.save.emit(this.data);
    }
    this.edit = !this.edit;
  }
  del() {
    this.remove.emit(this.data.id);
  }
}