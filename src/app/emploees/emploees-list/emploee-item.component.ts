import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emploee-item',
  templateUrl: './emploee-item.component.html'
})
export class EmploeeItemComponent implements OnInit {
  @Input() emploee;
  @Output() deleted = new EventEmitter();
  indexArray: number[] = [];
  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.deleted.emit(this.emploee);
  }
}
