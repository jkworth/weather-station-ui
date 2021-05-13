import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { WindSpeed } from 'src/generated/graphql';
import { GetWindSpeedForLast24Hours, WindSpeedState, SubscribeToNewWindSpeed } from './wind-speed.state';

@Injectable({
  providedIn: 'root'
})
export class WindSpeedFacade {
  constructor(private store: Store) {}

  @Select(WindSpeedState.records<WindSpeed>())
  private _values$: Observable<WindSpeed[]>;

  get values$(): Observable<WindSpeed[]> {
    this.store.dispatch(new GetWindSpeedForLast24Hours());
    this.store.dispatch(new SubscribeToNewWindSpeed());

    return this._values$;
  }
}
