import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { Rain, RainForLast24HoursGQL, NewRainAddedGQL } from 'src/generated/graphql';
import { WxBaseState, WxBaseStateModel } from '../wx-base/wx-base.state';

export interface RainStateModel extends WxBaseStateModel<Rain> {}

export const RAIN_STATE_TOKEN = new StateToken<RainStateModel>('Rain');

export class GetRainForLast24Hours {
  static readonly type = '[Rain] Get records for last 24 hours';
}

export class SubscribeToNewRain {
  static readonly type = '[Rain] Get new records as they are logged';
}

@State<RainStateModel>({
  name: RAIN_STATE_TOKEN,
  defaults: {
    records: []
  }
})
@Injectable()
export class RainState extends WxBaseState<Rain> {
  constructor(last24HoursGql: RainForLast24HoursGQL, addedGql: NewRainAddedGQL) {
    super(last24HoursGql, addedGql, Rain.name);
  }

  @Action(GetRainForLast24Hours, { cancelUncompleted: true })
  loadRainForLast24Hours(ctx: StateContext<RainStateModel>): void {
    this.loadLast24Hours(ctx);
  }

  @Action(SubscribeToNewRain, { cancelUncompleted: true })
  subscribeToNewRain(ctx: StateContext<RainStateModel>): void {
    this.subscribeToNewRecords(ctx);
  }
}
