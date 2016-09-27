import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class EmploeesService {
  emploee;
  emploees: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.emploees =  this.af.database.list('emploees');
  }

  getEmploees() {
    return this.emploees;
  }

  createEmploee(newEmploee) {
    this.emploees.push(newEmploee);
  }

  deleteEmploee(key: string) {
    this.emploees.remove(key);
  }

  updateEmploee(emploee, id) {
    console.log(emploee.firstName, id)
    this.emploees.update(id, {
      firstName: emploee.firstName,
      lastName: emploee.lastName,
      role: emploee.role,
      technicalExpertise: emploee.technicalExpertise,
      skills: emploee.skills,
      communication: emploee.communication,
      leadership: emploee.leadership,
      education: emploee.education
    });
  }
}
