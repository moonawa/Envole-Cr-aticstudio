import { TestBed } from '@angular/core/testing';

import { ColaborateurService } from './colaborateur.service';

describe('ColaborateurService', () => {
  let service: ColaborateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColaborateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
