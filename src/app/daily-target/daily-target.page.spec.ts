import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTargetPage } from './daily-target.page';

describe('DailyTargetPage', () => {
  let component: DailyTargetPage;
  let fixture: ComponentFixture<DailyTargetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTargetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTargetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
