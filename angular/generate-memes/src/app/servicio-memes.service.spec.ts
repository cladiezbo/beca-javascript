import { TestBed } from '@angular/core/testing';

import { ServicioMemesService } from './servicio-memes.service';

describe('ServicioMemesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioMemesService = TestBed.get(ServicioMemesService);
    expect(service).toBeTruthy();
  });
});
