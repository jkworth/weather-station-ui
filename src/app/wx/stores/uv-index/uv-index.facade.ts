import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UvIndex } from 'src/generated/graphql';
import { GetUvIndexForLast24Hours, SubscribeToNewUvIndex, UvIndexState } from './uv-index.state';

@Injectable({
  providedIn: 'root'
})
export class UvIndexFacade {
  constructor(private store: Store) {}

  @Select(UvIndexState.records<UvIndex>())
  private _values$: Observable<UvIndex[]>;

  get values$(): Observable<UvIndex[]> {
    this.store.dispatch(new GetUvIndexForLast24Hours());
    this.store.dispatch(new SubscribeToNewUvIndex());

    return this._values$;
  }
}
