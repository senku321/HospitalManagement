import { TestBed } from '@angular/core/testing';

import { AssignDocService } from './assign-doc.service';

describe('AssignDocService', () => {
  let service: AssignDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
