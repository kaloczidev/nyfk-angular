/**
 * Created by kaloczidavid on 2016. 10. 08..
 */

import {Component} from '@angular/core';
import {OwnershipsService} from './ownership.service';
import {Car} from '../../interfaces/car.interface';
import {Ownership} from '../../interfaces/ownership.interface';
import {Person} from '../../interfaces/person.interface';

@Component({
  templateUrl: './ownership.page.template.html',
  styleUrls: ['./ownership.page.style.css']
})
export class OwnershipPageComponent {
  ownerships: Array<Ownership> = [];
  newOwnership: Ownership = {
    pid: null,
    id: null,
    cid: null,
    age: null,
    manufacturer: null,
    name: null,
    type: null,
    year: null
  };

  cars: Array<Car>;
  people: Array<Person>;

  constructor(private service: OwnershipsService) {
    this.update();
  }

  edit(data: Ownership) {
    console.log('sent data', data);
    this.service.update(data).subscribe(res => {
      console.log('upd. response', res);
      this.update();
    });
  }

  del(id: number) {
    this.service.del(id).subscribe(res => {
      console.log('delete:', res);
      this.update();
    });
  }

  add() {
    this.service.add(this.newOwnership).subscribe(res => {
      console.log('add:', res);
      this.update();
    });
  }

  private update() {
    this.service.getPeople().subscribe(people => {
      this.people = people;
    });
    this.service.getCars().subscribe(cars => {
      this.cars = cars;
    });
    this.service.list().subscribe(ownerships => {
      this.ownerships = ownerships;
    });
    this.newOwnership = {
      pid: null,
      id: null,
      cid: null,
      age: null,
      manufacturer: null,
      name: null,
      type: null,
      year: null
    };
  }
}

