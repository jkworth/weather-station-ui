import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Humidity } from 'src/generated/graphql';
import { GetHumidityForLast24Hours, HumidityState, SubscribeToNewHumidity } from './humidity.state';

@Injectable({
  providedIn: 'root'
})
export class HumidityFacade {
  constructor(private store: Store) {}

  @Select(HumidityState.records<Humidity>())
  private _values$: Observable<Humidity[]>;

  get values$(): Observable<Humidity[]> {
    this.store.dispatch(new GetHumidityForLast24Hours());
    this.store.dispatch(new SubscribeToNewHumidity());

    return this._values$;
  }
}
