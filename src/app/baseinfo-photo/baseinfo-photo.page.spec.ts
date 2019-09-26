import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseinfoPhotoPage } from './baseinfo-photo.page';

describe('BaseinfoPhotoPage', () => {
  let component: BaseinfoPhotoPage;
  let fixture: ComponentFixture<BaseinfoPhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseinfoPhotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseinfoPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
