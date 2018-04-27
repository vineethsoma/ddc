import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentsComponent } from './view-appointments.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ViewAppointmentsComponent', () => {
  let component: ViewAppointmentsComponent;
  let fixture: ComponentFixture<ViewAppointmentsComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ViewAppointmentsComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentsComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
