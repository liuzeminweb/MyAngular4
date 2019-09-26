import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCartComponent } from './find-cart.component';

describe('FindCartComponent', () => {
  let component: FindCartComponent;
  let fixture: ComponentFixture<FindCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
