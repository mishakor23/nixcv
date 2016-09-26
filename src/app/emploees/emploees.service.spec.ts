/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmploeesService } from './emploees.service';

describe('Service: Emploees', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmploeesService]
    });
  });

  it('should ...', inject([EmploeesService], (service: EmploeesService) => {
    expect(service).toBeTruthy();
  }));
});
