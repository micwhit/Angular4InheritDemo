import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildObjComponent } from './child-obj.component';

describe('ChildObjComponent', () => {
  let component: ChildObjComponent;
  let fixture: ComponentFixture<ChildObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
