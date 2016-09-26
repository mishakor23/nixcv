import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emploee-grid',
  templateUrl: './emploee-grid.component.html'
})
export class EmploeeGridComponent implements OnInit {
  @Input() emploee;
  constructor() { }

  ngOnInit() {
  }

}
