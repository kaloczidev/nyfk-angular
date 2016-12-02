/**
 * Created by kaloczidavid on 2016. 10. 26..
 */

import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Car} from '../../interfaces/car.interface';

@Component({
  selector: 'car',
  templateUrl: 'car.template.html',
  styleUrls: ['car.style.css']
})
export class CarComponent {

  @Input() data: Car;

  edit: boolean = false;
  @Output() save = new EventEmitter<Car>();
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