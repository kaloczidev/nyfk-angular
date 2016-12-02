/**
 * Created by kaloczidavid on 2016. 10. 08..
 */

import {Component} from '@angular/core';
import {PeopleService} from './people.service';
import {Person} from '../../interfaces/person.interface';

@Component({
  templateUrl: './people.page.template.html',
  styleUrls: ['./people.page.style.css']
})
export class PeoplePageComponent {
  peoples: Array<Person>;
  newPerson: Person = {name: null, age: null};

  constructor(private service: PeopleService) {
    this.update();
  }

  edit(id: number, data: Person) {
    this.service.update(id, data).subscribe(res => {
      console.log('send', res.data);
    });
  }

  del(id: number) {
    this.service.del(id).subscribe(res => {
      console.log('delete:', res.data);
      this.update();
    });
  }

  add() {
    this.service.add(this.newPerson).subscribe(res => {
      console.log('add:', res.data);
      this.update();
    });
  }

  private update() {
    this.peoples = [];
    this.service.list().subscribe(res => {
      if(!res.error) {
        this.peoples = res.data;
      }else {
          console.error('error', res.error );
          this.peoples = [
              {id:1, name: 'dummy joe', age: 111}
          ]
      }
    }, err => {
      console.log(err);
    });
    this.newPerson = {name: null, age: null};
  }
}

