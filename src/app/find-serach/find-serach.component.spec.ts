import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSerachComponent } from './find-serach.component';

describe('FindSerachComponent', () => {
  let component: FindSerachComponent;
  let fixture: ComponentFixture<FindSerachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindSerachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindSerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
