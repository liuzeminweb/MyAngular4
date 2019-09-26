import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MychipTreeComponent } from './mychip.component';

describe('MychipTreeComponent', () => {
  let component: MychipTreeComponent;
  let fixture: ComponentFixture<MychipTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MychipTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MychipTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
