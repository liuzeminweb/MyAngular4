import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSettingPage } from './info-setting.page';

describe('InfoSettingPage', () => {
  let component: InfoSettingPage;
  let fixture: ComponentFixture<InfoSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
