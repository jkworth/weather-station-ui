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

  protected loadLast24Hours(ctx: StateContext<WxBaseStateModel<T>>): void {
    if (this.retrieved24Hours) return;

    this.retrieved24Hours = true;

    this.last24HoursGql.fetch().subscribe((response) => {
      ctx.setState(
        produce((draft: WritableDraft<WxBaseStateModel<T>>) => {
          draft.records = response.data[`${this.camelCaseTypeName}ForLast24Hours`];
        })
      );
    });
  }

  protected subscribeToNewRecords(ctx: StateContext<WxBaseStateModel<T>>): void {
    if (this.subscribedToChanges) return;

    this.subscribedToChanges = true;

    this.newRecordAddedGql.subscribe().subscribe((response) => {
      ctx.setState(
        produce((draft: WritableDraft<WxBaseStateModel<T>>) => {
          draft.records.pop();
          draft.records = [...draft.records, response.data[`new${this.pascalCaseTypeName}TemperatureAdded`]];
        })
      );
    });
  }

  private get camelCaseTypeName(): string {
    return `${this.pascalCaseTypeName[0].toLocaleLowerCase() + this.pascalCaseTypeName.slice(1)}`;
  }
}
