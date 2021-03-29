import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { OutsideTemperatureComponent } from './outside-temperature.component';

describe('OutsideTemperatureComponent', () => {
  let component: OutsideTemperatureComponent;
  let fixture: ComponentFixture<OutsideTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutsideTemperatureComponent],
      imports: [NgxsModule.forRoot([])]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    await expect(component).toBeDefined();
  });
});
