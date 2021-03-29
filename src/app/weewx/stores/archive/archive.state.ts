import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import produce from 'immer';
import { ArchiveEntity } from '../../entities';
import { WeeWXService } from '../../service/weewx.service';
import { GetArchivesForLast24Hours, GetArchivesFrom } from './arcchive.actions';

export interface ArchiveStateModel {
  records: ArchiveEntity[];
}

export const ARCHIVE_STATE_TOKEN = new StateToken<ArchiveStateModel>('archive');

@State<ArchiveStateModel>({
  name: ARCHIVE_STATE_TOKEN,
  defaults: {
    records: []
  }
})
@Injectable()
export class ArchiveState {
  constructor(private weeWXService: WeeWXService) {}

  @Action(GetArchivesForLast24Hours, { cancelUncompleted: true })
  getArchivesForLast24Hours(ctx: StateContext<ArchiveStateModel>): void {
    this.weeWXService.getArchivesForLast24Hours().subscribe((results) => {
      ctx.setState(
        produce((draft: ArchiveStateModel) => {
          draft.records = this.calculateRainAccumulation(results);
        })
      );
    });
  }

  @Action(GetArchivesFrom, { cancelUncompleted: true })
  getArchivesFrom(ctx: StateContext<ArchiveStateModel>, action: GetArchivesFrom): void {
    this.weeWXService.getArchivesFrom(action.dateTime).subscribe((results) => {
      if (results.length > 0) {
        ctx.setState(
          produce((draft: ArchiveStateModel) => {
            draft.records = this.calculateRainAccumulation([...draft.records, ...results]);
            const interval = draft.records[0].interval;
            const maxRecords = (24 * 60) / interval;
            if (draft.records.length > maxRecords) {
              draft.records = draft.records.reverse().splice(0, maxRecords).reverse();
            }
          })
        );
      }
    });
  }

  private calculateRainAccumulation(records: ArchiveEntity[]): ArchiveEntity[] {
    const results: ArchiveEntity[] = [];
    let accumulation = 0;
    records.forEach((archive) => {
      accumulation += archive.rain;
      results.push({ ...archive, rainAccumulation: accumulation });
    });

    return results;
  }
}
