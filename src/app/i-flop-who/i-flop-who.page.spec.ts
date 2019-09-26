import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IFlopWhoPage } from './i-flop-who.page';

describe('IFlopWhoPage', () => {
  let component: IFlopWhoPage;
  let fixture: ComponentFixture<IFlopWhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IFlopWhoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IFlopWhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
