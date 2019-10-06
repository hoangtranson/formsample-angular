import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalHistoryComponent } from './cal-history.component';

describe('CalHistoryComponent', () => {
  let component: CalHistoryComponent;
  let fixture: ComponentFixture<CalHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
