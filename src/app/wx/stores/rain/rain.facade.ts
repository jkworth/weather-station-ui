import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Rain } from 'src/generated/graphql';
import { GetRainForLast24Hours, RainState, SubscribeToNewRain } from './Rain.state';

@Injectable({
  providedIn: 'root'
})
export class RainFacade {
  constructor(private store: Store) {}

  @Select(RainState.records<Rain>())
  private _values$: Observable<Rain[]>;

  get values$(): Observable<Rain[]> {
    this.store.dispatch(new GetRainForLast24Hours());
    this.store.dispatch(new SubscribeToNewRain());

    return this._values$;
  }
}
