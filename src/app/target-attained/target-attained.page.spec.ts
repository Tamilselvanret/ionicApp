import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetAttainedPage } from './target-attained.page';

describe('TargetAttainedPage', () => {
  let component: TargetAttainedPage;
  let fixture: ComponentFixture<TargetAttainedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetAttainedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetAttainedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
