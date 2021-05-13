import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Light } from 'src/generated/graphql';
import { GetLightForLast24Hours, LightState, SubscribeToNewLight } from './Light.state';

@Injectable({
  providedIn: 'root'
})
export class LightFacade {
  constructor(private store: Store) {}

  @Select(LightState.records<Light>())
  private _values$: Observable<Light[]>;

  get values$(): Observable<Light[]> {
    this.store.dispatch(new GetLightForLast24Hours());
    this.store.dispatch(new SubscribeToNewLight());

    return this._values$;
  }
}
