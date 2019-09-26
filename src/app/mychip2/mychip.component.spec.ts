import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MychipTowComponent } from './mychip.component';

describe('MychipTowComponent', () => {
  let component: MychipTowComponent;
  let fixture: ComponentFixture<MychipTowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MychipTowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MychipTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
