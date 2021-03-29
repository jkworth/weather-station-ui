import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent]
      })
        .compileComponents()
        .catch((err) => console.error(err));
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app)
      .toBeTruthy()
      .catch((err) => console.error(err));
  });

  //   it(`should have as title 'weather-station'`, () => {
  //     const fixture = TestBed.createComponent(AppComponent);
  //     const app = fixture.componentInstance;
  //     expect(app.title)
  //       .toEqual('weather-station')
  //       .catch((err) => console.error(err));
  //   });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span').textContent)
      .toContain('weather-station app is running!')
      .catch((err) => console.error(err));
  });
});
