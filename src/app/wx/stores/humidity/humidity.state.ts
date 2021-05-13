import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { Humidity, HumidityForLast24HoursGQL, NewHumidityAddedGQL } from 'src/generated/graphql';
import { WxBaseState, WxBaseStateModel } from '../wx-base/wx-base.state';

export interface HumidityStateModel extends WxBaseStateModel<Humidity> {}

export const HUMIDITY_STATE_TOKEN = new StateToken<HumidityStateModel>('Humidity');

export class GetHumidityForLast24Hours {
  static readonly type = '[Humidity] Get records for last 24 hours';
}

export class SubscribeToNewHumidity {
  static readonly type = '[Humidity] Get new records as they are logged';
}

@State<HumidityStateModel>({
  name: HUMIDITY_STATE_TOKEN,
  defaults: {
    records: []
  }
})
@Injectable()
export class HumidityState extends WxBaseState<Humidity> {
  constructor(last24HoursGql: HumidityForLast24HoursGQL, addedGql: NewHumidityAddedGQL) {
    super(last24HoursGql, addedGql, Humidity.name);
  }

  @Action(GetHumidityForLast24Hours, { cancelUncompleted: true })
  loadHumidityForLast24Hours(ctx: StateContext<HumidityStateModel>): void {
    this.loadLast24Hours(ctx);
  }

  @Action(SubscribeToNewHumidity, { cancelUncompleted: true })
  subscribeToNewHumidity(ctx: StateContext<HumidityStateModel>): void {
    this.subscribeToNewRecords(ctx);
  }
}
