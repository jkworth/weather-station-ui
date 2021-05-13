import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { Light, LightForLast24HoursGQL, NewLightAddedGQL } from 'src/generated/graphql';
import { WxBaseState, WxBaseStateModel } from '../wx-base/wx-base.state';

export interface LightStateModel extends WxBaseStateModel<Light> {}

export const LIGHT_STATE_TOKEN = new StateToken<LightStateModel>('Light');

export class GetLightForLast24Hours {
  static readonly type = '[Light] Get records for last 24 hours';
}

export class SubscribeToNewLight {
  static readonly type = '[Light] Get new records as they are logged';
}

@State<LightStateModel>({
  name: LIGHT_STATE_TOKEN,
  defaults: {
    records: []
  }
})
@Injectable()
export class LightState extends WxBaseState<Light> {
  constructor(last24HoursGql: LightForLast24HoursGQL, addedGql: NewLightAddedGQL) {
    super(last24HoursGql, addedGql, Light.name);
  }

  @Action(GetLightForLast24Hours, { cancelUncompleted: true })
  loadLightForLast24Hours(ctx: StateContext<LightStateModel>): void {
    this.loadLast24Hours(ctx);
  }

  @Action(SubscribeToNewLight, { cancelUncompleted: true })
  subscribeToNewLight(ctx: StateContext<LightStateModel>): void {
    this.subscribeToNewRecords(ctx);
  }
}
