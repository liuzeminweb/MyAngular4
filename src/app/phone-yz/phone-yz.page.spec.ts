import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneYzPage } from './phone-yz.page';

describe('PhoneYzPage', () => {
  let component: PhoneYzPage;
  let fixture: ComponentFixture<PhoneYzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneYzPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneYzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
