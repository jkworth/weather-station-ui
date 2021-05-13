import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { WindDirection } from 'src/generated/graphql';
import {
  GetWindDirectionForLast24Hours,
  SubscribeToNewWindDirection,
  WindDirectionState
} from './wind-direction.state';

@Injectable({
  providedIn: 'root'
})
export class WindDirectionFacade {
  constructor(private store: Store) {}

  @Select(WindDirectionState.records<WindDirection>())
  private _values$: Observable<WindDirection[]>;

  get values$(): Observable<WindDirection[]> {
    this.store.dispatch(new GetWindDirectionForLast24Hours());
    this.store.dispatch(new SubscribeToNewWindDirection());

    return this._values$;
  }
}
