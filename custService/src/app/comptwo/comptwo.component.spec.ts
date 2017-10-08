import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptwoComponent } from './comptwo.component';

describe('ComptwoComponent', () => {
  let component: ComptwoComponent;
  let fixture: ComponentFixture<ComptwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
