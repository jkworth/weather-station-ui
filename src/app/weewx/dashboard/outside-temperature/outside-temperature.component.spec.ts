import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {OutsideTemperatureComponent} from './outside-temperature.component';

describe('OutsideTemperatureComponent', () => {
    let component: OutsideTemperatureComponent;
    let fixture: ComponentFixture<OutsideTemperatureComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [OutsideTemperatureComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OutsideTemperatureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
