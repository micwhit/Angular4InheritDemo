import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentObjComponent } from './parent-obj.component';

describe('ParentObjComponent', () => {
  let component: ParentObjComponent;
  let fixture: ComponentFixture<ParentObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
