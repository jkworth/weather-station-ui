import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { Archive, ArchiveForLast24HoursGQL, NewArchiveAddedGQL } from 'src/generated/graphql';
import { WxBaseState, WxBaseStateModel } from '../wx-base/wx-base.state';

export interface ArchiveStateModel extends WxBaseStateModel<Archive> {}

export const ARCHIVE_STATE_TOKEN = new StateToken<ArchiveStateModel>('Archive');

export class GetArchiveForLast24Hours {
  static readonly type = '[Archive] Get records for last 24 hours';
}

export class SubscribeToNewArchive {
  static readonly type = '[Archive] Get new records as they are logged';
}

@State<ArchiveStateModel>({
  name: ARCHIVE_STATE_TOKEN,
  defaults: {
    records: []
  }
})
@Injectable()
export class ArchiveState extends WxBaseState<Archive> {
  constructor(last24HoursGql: ArchiveForLast24HoursGQL, addedGql: NewArchiveAddedGQL) {
    super(last24HoursGql, addedGql, Archive.name);
  }

  @Action(GetArchiveForLast24Hours, { cancelUncompleted: true })
  loadArchiveForLast24Hours(ctx: StateContext<ArchiveStateModel>): void {
    this.loadLast24Hours(ctx /* (records) => {
      return records.map(this.calculateRainFall);
    } */);
  }

  @Action(SubscribeToNewArchive, { cancelUncompleted: true })
  subscribeToNewArchive(ctx: StateContext<ArchiveStateModel>): void {
    this.subscribeToNewRecords(ctx /* this.calculateRainFall */);
  }

  // private calculateRainFall(record: Archive, index: number, records: Archive[]): Archive {
  //   let totalRainIn = new Decimal(0);
  //   for (let i = index; i >= 0; i--) {
  //     totalRainIn = totalRainIn.add(records[i].rainIn);
  //   }

  //   return { ...record, totalRainIn: totalRainIn.toNumber() };
  // }
}
