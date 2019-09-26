import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceSettingPage } from './preference-setting.page';

describe('PreferenceSettingPage', () => {
  let component: PreferenceSettingPage;
  let fixture: ComponentFixture<PreferenceSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenceSettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
