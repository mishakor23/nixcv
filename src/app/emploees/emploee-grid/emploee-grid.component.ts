import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

import {EmploeesService} from '../emploees.service';
import { Emploee } from '../emploee';

@Component({
  selector: 'app-emploee-grid',
  templateUrl: './emploee-grid.component.html'
})
export class EmploeeGridComponent implements OnInit {
  emploee: Emploee;

  constructor(
    private route: ActivatedRoute,
    private emploeesService: EmploeesService,
  ) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.emploeesService.getEmploee(id)
        .subscribe(emploee => {
          this.emploee = emploee;
        });
      });
  }


}
