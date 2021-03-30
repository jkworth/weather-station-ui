import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WeeWXService } from './weewx.service';

describe('WeewxService', () => {
  let service: WeeWXService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(WeeWXService);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
