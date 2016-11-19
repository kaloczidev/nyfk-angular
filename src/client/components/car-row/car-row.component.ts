/**
 * Created by kaloczidavid on 2016. 10. 26..
 */

import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Car} from '../../interfaces/car.interface';

@Component({
  selector: 'car-row',
  templateUrl: 'car-row.template.html',
  styleUrls: ['car-row.style.css']
})
export class CarEditorComponent {

  @Input() set row(val: Car) {
    this.value = val;
  }

  value: Car;
  edit: boolean = false;
  @Output() save = new EventEmitter<Car>();
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