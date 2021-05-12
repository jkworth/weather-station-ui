import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetTemperaturesForLast24Hours, SubscribeToNewTemperatures } from '../stores/temperatures/temperatures.actions';

@Injectable({
  providedIn: 'root'
})
export class WxService {
  constructor(private store: Store) {}

  start() {
    this.startTemperatures();
  }

  private startTemperatures() {
    this.store.dispatch(new GetTemperaturesForLast24Hours());
    this.store.dispatch(new SubscribeToNewTemperatures());
  }
}
