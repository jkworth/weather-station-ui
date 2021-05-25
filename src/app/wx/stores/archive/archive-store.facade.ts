import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Archive } from 'src/generated/graphql';
import { ArchiveState, GetArchiveForLast24Hours, SubscribeToNewArchive } from './archive-store.state';

@Injectable({
  providedIn: 'root'
})
export class ArchiveFacade {
  constructor(private store: Store) {}

  @Select(ArchiveState.records<Archive>())
  private _values$: Observable<Archive[]>;

  get values$(): Observable<Archive[]> {
    this.store.dispatch(new GetArchiveForLast24Hours());
    this.store.dispatch(new SubscribeToNewArchive());

    return this._values$;
  }
}
