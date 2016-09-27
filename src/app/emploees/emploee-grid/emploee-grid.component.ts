import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/Rx';

import {EmploeesService} from '../emploees.service';

@Component({
  selector: 'app-emploee-grid',
  templateUrl: './emploee-grid.component.html'
})
export class EmploeeGridComponent implements OnInit {
  emploee: FirebaseListObservable<any>;

  constructor(
    private route: ActivatedRoute,
    private emploeesService: EmploeesService,
    private af: AngularFire
  ) {

   }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.emploee = this.af.database.list(`emploees/${id}`, { preserveSnapshot: true });
        this.emploee.subscribe( snapshots => {
          snapshots.forEach(snapshot => {
            this.emploee[snapshot.key] = snapshot.val();
          })
        })
      });
  }


}
