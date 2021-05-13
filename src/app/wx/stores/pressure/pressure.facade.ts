import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Pressure } from 'src/generated/graphql';
import { GetPressureForLast24Hours, PressureState, SubscribeToNewPressure } from './Pressure.state';

@Injectable({
  providedIn: 'root'
})
export class PressureFacade {
  constructor(private store: Store) {}

  @Select(PressureState.records<Pressure>())
  private _values$: Observable<Pressure[]>;

  get values$(): Observable<Pressure[]> {
    this.store.dispatch(new GetPressureForLast24Hours());
    this.store.dispatch(new SubscribeToNewPressure());

    return this._values$;
  }
}
