import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TemporalLineChartComponent} from './temporal-line-chart.component';

describe('TemporalLineChartComponent', () => {
    let component: TemporalLineChartComponent;
    let fixture: ComponentFixture<TemporalLineChartComponent>;

    beforeEach(async(() => {
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
