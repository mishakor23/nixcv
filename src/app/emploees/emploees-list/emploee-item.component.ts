import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emploee-item',
  templateUrl: './emploee-item.component.html'
})
export class EmploeeItemComponent implements OnInit {
  @Input() emploee;

  constructor() { }

  ngOnInit() {
  }

}
