import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { WindSpeed, WindSpeedForLast24HoursGQL, NewWindSpeedAddedGQL } from 'src/generated/graphql';
import { WxBaseState, WxBaseStateModel } from '../wx-base/wx-base.state';

export interface WindSpeedStateModel extends WxBaseStateModel<WindSpeed> {}

export const WIND_SPEED_STATE_TOKEN = new StateToken<WindSpeedStateModel>('WindSpeed');

export class GetWindSpeedForLast24Hours {
  static readonly type = '[WindSpeed] Get records for last 24 hours';
}

export class SubscribeToNewWindSpeed {
  static readonly type = '[WindSpeed] Get new records as they are logged';
}

@State<WindSpeedStateModel>({
  name: WIND_SPEED_STATE_TOKEN,
  defaults: {
    records: []
  }
})
@Injectable()
export class WindSpeedState extends WxBaseState<WindSpeed> {
  constructor(last24HoursGql: WindSpeedForLast24HoursGQL, addedGql: NewWindSpeedAddedGQL) {
    super(last24HoursGql, addedGql, WindSpeed.name);
  }

  @Action(GetWindSpeedForLast24Hours, { cancelUncompleted: true })
  loadWindSpeedForLast24Hours(ctx: StateContext<WindSpeedStateModel>): void {
    this.loadLast24Hours(ctx);
  }

  @Action(SubscribeToNewWindSpeed, { cancelUncompleted: true })
  subscribeToNewWindSpeed(ctx: StateContext<WindSpeedStateModel>): void {
    this.subscribeToNewRecords(ctx);
  }
}
