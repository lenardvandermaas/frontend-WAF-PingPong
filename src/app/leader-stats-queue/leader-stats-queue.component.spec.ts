import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderStatsQueueComponent } from './leader-stats-queue.component';

describe('LeaderStatsQueueComponent', () => {
  let component: LeaderStatsQueueComponent;
  let fixture: ComponentFixture<LeaderStatsQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderStatsQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderStatsQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
