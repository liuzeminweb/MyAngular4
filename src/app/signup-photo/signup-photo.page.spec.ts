import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPhotoPage } from './signup-photo.page';

describe('SignupPhotoPage', () => {
  let component: SignupPhotoPage;
  let fixture: ComponentFixture<SignupPhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPhotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
