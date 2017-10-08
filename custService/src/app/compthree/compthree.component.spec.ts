import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompthreeComponent } from './compthree.component';

describe('CompthreeComponent', () => {
  let component: CompthreeComponent;
  let fixture: ComponentFixture<CompthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
