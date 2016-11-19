/**
 * Created by kaloczidavid on 2016. 10. 08..
 */

import {Component} from '@angular/core';
import {CarsService} from './cars.service';
import {Car} from '../../interfaces/car.interface';

@Component({
  templateUrl: './cars.page.template.html',
  styleUrls: ['./cars.page.style.css']
})
export class CarsPageComponent {
  cars: Array<Car>;
  newCar: Car = {id: null, type: null, manufacturer: null, year: null};

  constructor(private service: CarsService) {
    this.update();
  }

  edit(id: number, data: Car) {
    this.service.update(id, data).subscribe(res => {
      console.log('send', res);
    });
  }

  del(id: number) {
    this.service.del(id).subscribe(res => {
      console.log('delete:', res);
      this.update();
    });
  }

  add() {
    this.service.add(this.newCar).subscribe(res => {
      console.log('add:', res);
      this.update();
    });
  }

  private update() {
    this.cars = [];
    this.service.list().subscribe(res => {
      console.log(res);
      this.cars = res;
    });
    this.newCar = {id: null, type: null, manufacturer: null, year: null};
  }
}

