import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PersonInfo } from '../_models/person-info';
import { personData } from './person-data';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons$: BehaviorSubject<PersonInfo[]>;
  persons: Array<PersonInfo> = [];
  index: number;

  constructor() {
    this.persons$ = new BehaviorSubject([]);
    this.persons = personData;
    this.index = personData.length + 1;
  }

  getAllPersonInfo() {
    this.persons$.next(this.persons);
  }

  addPersonInfo(person: PersonInfo) {
    console.log('person-obj:', person);

    person.id = this.index++;
    this.persons.push(person);
    console.log('add-persons: ', this.persons);
    this.persons$.next(this.persons);
  }

  editPersonInfo(person: PersonInfo) {
    const findElem = this.persons.find(p => p.id === person.id);

    findElem.name = person.name;
    findElem.email = person.email;
    findElem.image = person.image;
    findElem.birth = person.birth;
    findElem.address = person.address;
    findElem.code = person.code;

    this.persons$.next(this.persons);
  }

  deletePersonInfo(id: number) {
    console.log('person-id: ', id);
    this.persons = this.persons.filter(p => {
      return p.id !== id;
    });
    console.log('delete-persons: ', this.persons);
    this.persons$.next(this.persons);
  }
}
