import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class EmploeesService {
  emploees: FirebaseListObservable<any>;
  constructor(private af: AngularFire) {
    this.emploees =  this.af.database.list('emploees');
  }

  getEmploees() {
    return this.emploees;
  }

  createEmploee(newEmploee) {
    this.emploees.push(newEmploee);
  }
}
