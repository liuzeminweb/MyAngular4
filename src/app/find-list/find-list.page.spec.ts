import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindListPage } from './find-list.page';

describe('FindListPage', () => {
  let component: FindListPage;
  let fixture: ComponentFixture<FindListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
