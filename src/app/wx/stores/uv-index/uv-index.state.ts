import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { NewUvIndexAddedGQL, UvIndex, UvIndexForLast24HoursGQL } from 'src/generated/graphql';
import { WxBaseState, WxBaseStateModel } from '../wx-base/wx-base.state';

export interface UvIndexStateModel extends WxBaseStateModel<UvIndex> {}

export const UV_INDEX_STATE_TOKEN = new StateToken<UvIndexStateModel>('UvIndex');

export class GetUvIndexForLast24Hours {
  static readonly type = '[UvIndex] Get records for last 24 hours';
}

export class SubscribeToNewUvIndex {
  static readonly type = '[UvIndex] Get new records as they are logged';
}

@State<UvIndexStateModel>({
  name: UV_INDEX_STATE_TOKEN,
  defaults: {
    records: []
  }
})
@Injectable()
export class UvIndexState extends WxBaseState<UvIndex> {
  constructor(last24HoursGql: UvIndexForLast24HoursGQL, addedGql: NewUvIndexAddedGQL) {
    super(last24HoursGql, addedGql, UvIndex.name);
  }

  @Action(GetUvIndexForLast24Hours, { cancelUncompleted: true })
  loadUvIndexForLast24Hours(ctx: StateContext<UvIndexStateModel>): void {
    this.loadLast24Hours(ctx);
  }

  @Action(SubscribeToNewUvIndex, { cancelUncompleted: true })
  subscribeToNewUvIndex(ctx: StateContext<UvIndexStateModel>): void {
    this.subscribeToNewRecords(ctx);
  }
}
