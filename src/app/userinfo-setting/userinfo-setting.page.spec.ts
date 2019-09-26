import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoSettingPage } from './userinfo-setting.page';

describe('UserinfoSettingPage', () => {
  let component: UserinfoSettingPage;
  let fixture: ComponentFixture<UserinfoSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinfoSettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
