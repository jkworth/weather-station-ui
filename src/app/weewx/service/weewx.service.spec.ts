import { TestBed } from '@angular/core/testing';
import { WeeWXService } from './weewx.service';

describe('WeewxService', () => {
  let service: WeeWXService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeWXService);
  });

  it('should be created', () => {
    expect(service)
      .toBeTruthy()
      .catch((err) => console.error(err));
  });
});
