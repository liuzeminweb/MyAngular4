import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseinfoSettingPage } from './baseinfo-setting.page';

describe('BaseinfoSettingPage', () => {
  let component: BaseinfoSettingPage;
  let fixture: ComponentFixture<BaseinfoSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseinfoSettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseinfoSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
