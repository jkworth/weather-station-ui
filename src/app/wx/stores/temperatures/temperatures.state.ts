import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { NewTemperatureAddedGQL, Temperature, TemperatureForLast24HoursGQL } from 'src/generated/graphql';
import { WxBaseState, WxBaseStateModel } from '../wx-base/wx-base.state';

export interface TemperatureStateModel extends WxBaseStateModel<Temperature> {}

export const TEMPERATURE_STATE_TOKEN = new StateToken<TemperatureStateModel>('Temperature');

export class GetTemperatureForLast24Hours {
  static readonly type = '[Temperature] Get records for last 24 hours';
}

export class SubscribeToNewTemperature {
  static readonly type = '[Temperature] Get new records as they are logged';
}

@State<TemperatureStateModel>({
  name: TEMPERATURE_STATE_TOKEN,
  defaults: {
    records: []
  }
})
@Injectable()
export class TemperatureState extends WxBaseState<Temperature> {
  constructor(last24HoursGql: TemperatureForLast24HoursGQL, addedGql: NewTemperatureAddedGQL) {
    super(last24HoursGql, addedGql, Temperature.name);
  }

  @Action(GetTemperatureForLast24Hours, { cancelUncompleted: true })
  loadTemperaturesForLast24Hours(ctx: StateContext<TemperatureStateModel>): void {
    this.loadLast24Hours(ctx);
  }

  @Action(SubscribeToNewTemperature, { cancelUncompleted: true })
  subscribeToNewTemperatures(ctx: StateContext<TemperatureStateModel>): void {
    this.subscribeToNewRecords(ctx);
  }
}
