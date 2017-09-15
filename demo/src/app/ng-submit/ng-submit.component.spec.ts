import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSubmitComponent } from './ng-submit.component';

describe('NgSubmitComponent', () => {
  let component: NgSubmitComponent;
  let fixture: ComponentFixture<NgSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
