import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { SchedulerEffects } from './scheduler.effects';
import { LoadScheduler, SchedulerLoaded } from './scheduler.actions';

import { Observable } from 'rxjs/Observable';

describe('SchedulerEffects', () => {
  let actions$: Observable<any>;
  let effects$: SchedulerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        SchedulerEffects,
        DataPersistence,
        provideMockActions(() => actions$)
      ]
    });

    effects$ = TestBed.get(SchedulerEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadScheduler({}) });
      expect(effects$.loadScheduler$).toBeObservable(
        hot('-a-|', { a: new SchedulerLoaded({}) })
      );
    });
  });
});
