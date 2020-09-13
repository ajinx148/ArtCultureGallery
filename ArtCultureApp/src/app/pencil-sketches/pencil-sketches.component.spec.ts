import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PencilSketchesComponent } from './pencil-sketches.component';

describe('PencilSketchesComponent', () => {
  let component: PencilSketchesComponent;
  let fixture: ComponentFixture<PencilSketchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PencilSketchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PencilSketchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
