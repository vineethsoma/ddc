import { SchedulerLoaded } from './scheduler.actions';
import { schedulerReducer, initialState } from './scheduler.reducer';

describe('schedulerReducer', () => {
  it('should work', () => {
    const action: SchedulerLoaded = new SchedulerLoaded({});
    const actual = schedulerReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
