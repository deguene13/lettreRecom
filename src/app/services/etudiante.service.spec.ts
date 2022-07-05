import { TestBed } from '@angular/core/testing';

import { EtudianteService } from './etudiante.service';

describe('EtudianteService', () => {
  let service: EtudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
