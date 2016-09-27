import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

import {Emploee} from '../emploee';
import {EmploeesService} from '../emploees.service';

@Component({
  selector: 'app-emploees-list',
  templateUrl: './emploees-list.component.html'
})
export class EmploeesListComponent implements OnInit {
  emploees: FirebaseListObservable<any>;

  constructor(private emploeesService: EmploeesService) { }

  ngOnInit() {
    this.emploees = this.emploeesService.getEmploees();
  }

  onDeleteEmploee(key: string) {
    if(confirm('Are you sure?')) {
      this.emploeesService.deleteEmploee(key);
    } else {
      return false;
    }
  }
}
