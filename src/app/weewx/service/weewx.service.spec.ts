import {TestBed} from '@angular/core/testing';

import {WeewxService} from './weewx.service';

describe('WeewxService', () => {
    let service: WeewxService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WeewxService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
