import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Temperature } from 'src/generated/graphql';
import { GetTemperatureForLast24Hours, SubscribeToNewTemperature, TemperatureState } from './temperatures.state';

@Injectable({
  providedIn: 'root'
})
export class TemperatureFacade {
  constructor(private store: Store) {}

  @Select(TemperatureState.records<Temperature>())
  private _values$: Observable<Temperature[]>;

  get values$(): Observable<Temperature[]> {
    this.store.dispatch(new GetTemperatureForLast24Hours());
    this.store.dispatch(new SubscribeToNewTemperature());

    return this._values$;
  }
}
