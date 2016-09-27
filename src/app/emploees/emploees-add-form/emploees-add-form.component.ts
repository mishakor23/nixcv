import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { EmploeesService } from '../emploees.service';
import { Emploee } from '../emploee';

@Component({
  selector: 'app-emploees-add-form',
  templateUrl: './emploees-add-form.component.html'
})
export class EmploeesAddFormComponent implements OnInit {
  private emploeeId: string;
  private isNew = true;
  emploee;
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

  constructor(
    private emploeesService: EmploeesService,
    private router: Router,
    private route: ActivatedRoute,
    private af: AngularFire) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')) {
          this.isNew = false;
          this.route.params
            .map(params => params['id'])
            .subscribe((id) => {
              this.emploeeId = id;
              this.emploee = this.af.database.list(`emploees/${id}`, { preserveSnapshot: true });
              this.emploee.subscribe( snapshots => {
                snapshots.forEach(snapshot => {
                  this.emploee[snapshot.key] = snapshot.val();
                })
              })
            });
        } else {
          this.isNew = true;
          this.emploee = this.newEmploee;
        }
      }
    );
  }

  onSubmit() {
    if(this.isNew) {
      const { firstName,
              lastName,
              role,
              technicalExpertise,
              skills,
              communication,
              leadership,
              education
              } = this.newEmploee;

      this.emploeesService.createEmploee(this.newEmploee);
      this.navigateBack();
    } else {
      this.emploeesService.updateEmploee(this.emploee, this.emploeeId);
      this.navigateBack();
    }
  }

  navigateBack() {
    this.router.navigate(['/']);
  }
}
