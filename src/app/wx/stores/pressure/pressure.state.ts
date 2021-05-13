import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { Pressure, PressureForLast24HoursGQL, NewPressureAddedGQL } from 'src/generated/graphql';
import { WxBaseState, WxBaseStateModel } from '../wx-base/wx-base.state';

export interface PressureStateModel extends WxBaseStateModel<Pressure> {}

export const PRESSURE_STATE_TOKEN = new StateToken<PressureStateModel>('Pressure');

export class GetPressureForLast24Hours {
  static readonly type = '[Pressure] Get records for last 24 hours';
}

export class SubscribeToNewPressure {
  static readonly type = '[Pressure] Get new records as they are logged';
}

@State<PressureStateModel>({
  name: PRESSURE_STATE_TOKEN,
  defaults: {
    records: []
  }
})
@Injectable()
export class PressureState extends WxBaseState<Pressure> {
  constructor(last24HoursGql: PressureForLast24HoursGQL, addedGql: NewPressureAddedGQL) {
    super(last24HoursGql, addedGql, Pressure.name);
  }

  @Action(GetPressureForLast24Hours, { cancelUncompleted: true })
  loadPressureForLast24Hours(ctx: StateContext<PressureStateModel>): void {
    this.loadLast24Hours(ctx);
  }

  @Action(SubscribeToNewPressure, { cancelUncompleted: true })
  subscribeToNewPressure(ctx: StateContext<PressureStateModel>): void {
    this.subscribeToNewRecords(ctx);
  }
}
