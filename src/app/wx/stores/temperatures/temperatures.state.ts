import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import produce from 'immer';
import { NewTemperatureAddedGQL, Temperature, TemperaturesForLast24HoursGQL } from 'src/generated/graphql';
import { GetTemperaturesForLast24Hours, SubscribeToNewTemperatures } from './temperatures.actions';

export interface TemperatureStateModel {
  records: Temperature[];
}

export const TEMPERATURE_STATE_TOKEN = new StateToken<TemperatureStateModel>('temperature');

@State<TemperatureStateModel>({
  name: TEMPERATURE_STATE_TOKEN,
  defaults: {
    records: []
  }
})
@Injectable()
export class TemperatureState {
  constructor(
    private temperaturesForLast24HoursGql: TemperaturesForLast24HoursGQL,
    private newTemperatureAddedGql: NewTemperatureAddedGQL
  ) {}

  @Action(GetTemperaturesForLast24Hours, { cancelUncompleted: true })
  getTemperaturesForLast24Hours(ctx: StateContext<TemperatureStateModel>): void {
    this.temperaturesForLast24HoursGql.fetch().subscribe((response) => {
      ctx.setState(
        produce((draft: TemperatureStateModel) => {
          draft.records = response.data.temperaturesForLast24Hours;
        })
      );
    });
  }

  @Action(SubscribeToNewTemperatures, { cancelUncompleted: true })
  getNewTemperatures(ctx: StateContext<TemperatureStateModel>): void {
    this.newTemperatureAddedGql.subscribe().subscribe((response) => {
      ctx.setState(
        produce((draft: TemperatureStateModel) => {
          draft.records.pop();
          draft.records = [...draft.records, response.data.newTemperatureAdded];
        })
      );
    });
  }
}
