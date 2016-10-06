import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

import {Emploee} from '../emploee';
import {EmploeesService} from '../emploees.service';

@Component({
  selector: 'app-emploees-list',
  templateUrl: './emploees-list.component.html'
})
export class EmploeesListComponent implements OnInit {
  emploees: Emploee[];

  constructor(private emploeesService: EmploeesService) { }

  ngOnInit() {
    this.emploeesService.getEmploees()
    .subscribe(
      emploees => {
        this.emploees = emploees;
        this.emploeesService.emploees = emploees;
      }
    );
  }

  onDeleteEmploee(emploee) {
    if(confirm('Are you sure?')) {
      this.emploeesService.deleteEmploee(emploee)
        .subscribe(
          data => console.log(data),
          error => console.error(error)
        );
    } else {
      return false;
    }
  }
}
