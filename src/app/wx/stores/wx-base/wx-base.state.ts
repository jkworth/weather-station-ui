import { createSelector, StateContext } from '@ngxs/store';
import { Query, Subscription } from 'apollo-angular';
import { produce } from 'immer';
import { WritableDraft } from 'immer/dist/types/types-external';

export interface WxBaseStateModel<T> {
  records: T[];
}

export class WxBaseState<T> {
  constructor(
    private last24HoursGql: Query,
    private newRecordAddedGql: Subscription,
    private pascalCaseTypeName: string
  ) {}

  protected retrieved24Hours = false;
  protected subscribedToChanges = false;

  static records<T>() {
    return createSelector([this], (state: WxBaseStateModel<T>) => {
      return state.records;
    });
  }

  protected loadLast24Hours(ctx: StateContext<WxBaseStateModel<T>>, preProcessor?: (records: T[]) => T[]): void {
    if (this.retrieved24Hours) return;

    this.retrieved24Hours = true;

    this.last24HoursGql.fetch().subscribe((response) => {
      console.log(`24hrs of ${this.pascalCaseTypeName} loaded`);

      ctx.setState(
        produce((draft: WritableDraft<WxBaseStateModel<T>>) => {
          let records = response.data[`${this.camelCaseTypeName}ForLast24Hours`].map((record) => ({
            ...record
          }));

          records.forEach((record) => {
            if (record.hasOwnProperty('timestamp')) {
              record['timestamp'] = new Date(Date.parse(record['timestamp']));
            }
          });

          if (preProcessor) {
            records = preProcessor(records);
          }

          draft.records = records;
        })
      );
    });
  }

  protected subscribeToNewRecords(
    ctx: StateContext<WxBaseStateModel<T>>,
    preProcessor?: (record: T, index: number, records: T[]) => T
  ): void {
    if (this.subscribedToChanges) return;

    this.subscribedToChanges = true;

    this.newRecordAddedGql.subscribe().subscribe((response) => {
      console.log(`new ${this.pascalCaseTypeName} added`);
      ctx.setState(
        produce((draft: WritableDraft<WxBaseStateModel<T>>) => {
          draft.records.shift();
          let records = [...draft.records, response.data[`new${this.pascalCaseTypeName}Added`]];
          const newIndex = records.length - 1;
          if (preProcessor) {
            records[newIndex] = preProcessor(records[newIndex], newIndex, records);
          }
          draft.records = records;
        })
      );
    });
  }

  private get camelCaseTypeName(): string {
    return `${this.pascalCaseTypeName[0].toLocaleLowerCase() + this.pascalCaseTypeName.slice(1)}`;
  }
}
