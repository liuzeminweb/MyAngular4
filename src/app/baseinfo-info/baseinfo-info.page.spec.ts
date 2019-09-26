import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseinfoInfoPage } from './baseinfo-info.page';

describe('BaseinfoInfoPage', () => {
  let component: BaseinfoInfoPage;
  let fixture: ComponentFixture<BaseinfoInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseinfoInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseinfoInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
