import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponeComponent } from './compone.component';

describe('ComponeComponent', () => {
  let component: ComponeComponent;
  let fixture: ComponentFixture<ComponeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
