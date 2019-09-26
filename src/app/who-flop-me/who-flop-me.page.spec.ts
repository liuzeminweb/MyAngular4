import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoFlopMePage } from './who-flop-me.page';

describe('WhoFlopMePage', () => {
  let component: WhoFlopMePage;
  let fixture: ComponentFixture<WhoFlopMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoFlopMePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoFlopMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
