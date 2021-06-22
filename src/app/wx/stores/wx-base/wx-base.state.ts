import { createSelector, StateContext } from '@ngxs/store';
import { Query, Subscription } from 'apollo-angular';
import { produce } from 'immer';
import { WritableDraft } from 'immer/dist/types/types-external';
import { Subject } from 'rxjs';

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

  private subscriptionClosed = new Subject<Date>();

  get subscriptionClosed$() {
    return this.subscriptionClosed.asObservable();
  }

  static records<T>() {
    return createSelector([this], (state: WxBaseStateModel<T>) => {
      return state.records;
    });
  }

  protected loadLast24Hours(ctx: StateContext<WxBaseStateModel<T>>, preProcessor?: (records: T[]) => T[]): void {
    if (this.retrieved24Hours) return;

    this.retrieved24Hours = true;

    this.last24HoursGql.fetch().subscribe({
      next: (response) => {
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
      }
    });
  }

  protected subscribeToNewRecords(
    ctx: StateContext<WxBaseStateModel<T>>,
    preProcessor?: (record: T, index: number, records: T[]) => T
  ): void {
    if (this.subscribedToChanges) return;

    this.subscribedToChanges = true;

    this.newRecordAddedGql.subscribe().subscribe({
      next: (response) => {
        console.log(`new ${this.pascalCaseTypeName} added`);
        ctx.setState(
          produce((draft: WritableDraft<WxBaseStateModel<T>>) => {
            draft.records.shift();

            let records = [response.data[`new${this.pascalCaseTypeName}Added`]];
            records.forEach((record) => {
              if (record.hasOwnProperty('timestamp')) {
                record['timestamp'] = new Date(Date.parse(record['timestamp']));
              }
            });
            records = [...draft.records, ...records];

            const newIndex = records.length - 1;
            if (preProcessor) {
              records[newIndex] = preProcessor(records[newIndex], newIndex, records);
            }
            draft.records = records;
          })
        );
      }
    });
  }

  private get camelCaseTypeName(): string {
    return `${this.pascalCaseTypeName[0].toLocaleLowerCase() + this.pascalCaseTypeName.slice(1)}`;
  }
}
