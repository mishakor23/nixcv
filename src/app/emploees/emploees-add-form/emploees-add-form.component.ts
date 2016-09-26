import { Component, OnInit } from '@angular/core';

import { EmploeesService } from '../emploees.service';
import { Emploee } from '../emploee';

@Component({
  selector: 'app-emploees-add-form',
  templateUrl: './emploees-add-form.component.html'
})
export class EmploeesAddFormComponent implements OnInit {
  // emploee: Emploee;
  newEmploee = {
    firstName: '',
    lastName: '',
    role: '',
    technicalExpertise: '',
    skills: '',
    communication: '',
    leadership: '',
    education: ''
  }

  constructor(private emploeesService: EmploeesService) { }

  ngOnInit() {
  }

  onSubmit() {
    const { firstName,
            lastName,
            role,
            technicalExpertise,
            skills,
            communication,
            leadership,
            education
            } = this.newEmploee;
    console.log(this.newEmploee);

    this.emploeesService.createEmploee(this.newEmploee);
    this.newEmploee = {
      firstName: '',
      lastName: '',
      role: '',
      technicalExpertise: '',
      skills: '',
      communication: '',
      leadership: '',
      education: ''
    }
  }
}
