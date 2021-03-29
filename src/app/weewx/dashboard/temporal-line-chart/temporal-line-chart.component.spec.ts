import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { TemporalLineChartComponent } from './temporal-line-chart.component';

describe('TemporalLineChartComponent', () => {
  let component: TemporalLineChartComponent;
  let fixture: ComponentFixture<TemporalLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemporalLineChartComponent],
      imports: [NgxsModule.forRoot()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporalLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    await expect(component).toBeDefined();
  });
});
