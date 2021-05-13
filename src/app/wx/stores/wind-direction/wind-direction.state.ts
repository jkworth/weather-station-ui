import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { WindDirection, WindDirectionForLast24HoursGQL, NewWindDirectionAddedGQL } from 'src/generated/graphql';
import { WxBaseState, WxBaseStateModel } from '../wx-base/wx-base.state';

export interface WindDirectionStateModel extends WxBaseStateModel<WindDirection> {}

export const WIND_DIRECTION_STATE_TOKEN = new StateToken<WindDirectionStateModel>('WindDirection');

export class GetWindDirectionForLast24Hours {
  static readonly type = '[WindDirection] Get records for last 24 hours';
}

export class SubscribeToNewWindDirection {
  static readonly type = '[WindDirection] Get new records as they are logged';
}

@State<WindDirectionStateModel>({
  name: WIND_DIRECTION_STATE_TOKEN,
  defaults: {
    records: []
  }
})
@Injectable()
export class WindDirectionState extends WxBaseState<WindDirection> {
  constructor(last24HoursGql: WindDirectionForLast24HoursGQL, addedGql: NewWindDirectionAddedGQL) {
    super(last24HoursGql, addedGql, WindDirection.name);
  }

  @Action(GetWindDirectionForLast24Hours, { cancelUncompleted: true })
  loadWindDirectionForLast24Hours(ctx: StateContext<WindDirectionStateModel>): void {
    this.loadLast24Hours(ctx);
  }

  @Action(SubscribeToNewWindDirection, { cancelUncompleted: true })
  subscribeToNewWindDirection(ctx: StateContext<WindDirectionStateModel>): void {
    this.subscribeToNewRecords(ctx);
  }
}
