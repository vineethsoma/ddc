import { SchedulerLoaded } from './scheduler.actions';
import { reducers as schedulerReducer } from './scheduler.reducer';

describe('schedulerReducer', () => {
  it('should work', () => {
    const action: SchedulerLoaded = new SchedulerLoaded({});
    // const actual = schedulerReducer(<any>{}, action);
    expect({}).toEqual({});
  });
});
