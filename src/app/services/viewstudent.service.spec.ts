import { TestBed, inject } from '@angular/core/testing';

import { ViewstudentService } from './viewstudent.service';

describe('ViewstudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewstudentService]
    });
  });

  it('should be created', inject([ViewstudentService], (service: ViewstudentService) => {
    expect(service).toBeTruthy();
  }));
});
