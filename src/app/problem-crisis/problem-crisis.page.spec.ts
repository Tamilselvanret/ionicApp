import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemCrisisPage } from './problem-crisis.page';

describe('ProblemCrisisPage', () => {
  let component: ProblemCrisisPage;
  let fixture: ComponentFixture<ProblemCrisisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemCrisisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemCrisisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
