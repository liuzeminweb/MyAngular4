import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Signup3Page } from './signup3.page';

describe('Signup3Page', () => {
  let component: Signup3Page;
  let fixture: ComponentFixture<Signup3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signup3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Signup3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
