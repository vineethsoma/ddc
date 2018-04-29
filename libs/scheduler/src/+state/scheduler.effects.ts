import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  SchedulerActions,
  SchedulerActionTypes,
  LoadScheduler,
  SchedulerLoaded
} from './scheduler.actions';
import { SchedulerState } from './scheduler.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class SchedulerEffects {
  @Effect()
  effect$ = this.actions$.ofType(SchedulerActionTypes.SchedulerAction);

  @Effect()
  loadScheduler$ = this.dataPersistence.fetch(
    SchedulerActionTypes.LoadScheduler,
    {
      run: (action: LoadScheduler, state: SchedulerState) => {
        return new SchedulerLoaded(state);
      },

      onError: (action: LoadScheduler, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<SchedulerState>
  ) {}
}
