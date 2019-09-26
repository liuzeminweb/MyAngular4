import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RnamePage } from './rname.page';

describe('RnamePage', () => {
  let component: RnamePage;
  let fixture: ComponentFixture<RnamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RnamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RnamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
