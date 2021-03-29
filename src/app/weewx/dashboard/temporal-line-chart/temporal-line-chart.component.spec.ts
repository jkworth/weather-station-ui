import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {TemporalLineChartComponent} from './temporal-line-chart.component';

describe('TemporalLineChartComponent', () => {
    let component: TemporalLineChartComponent;
    let fixture: ComponentFixture<TemporalLineChartComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TemporalLineChartComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TemporalLineChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
