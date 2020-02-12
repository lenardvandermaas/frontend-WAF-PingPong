import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchConfirmComponent } from './match-confirm.component';

describe('MatchConfirmComponent', () => {
  let component: MatchConfirmComponent;
  let fixture: ComponentFixture<MatchConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
