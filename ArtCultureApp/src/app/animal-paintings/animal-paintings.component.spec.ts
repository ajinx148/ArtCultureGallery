import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPaintingsComponent } from './animal-paintings.component';

describe('AnimalPaintingsComponent', () => {
  let component: AnimalPaintingsComponent;
  let fixture: ComponentFixture<AnimalPaintingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalPaintingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalPaintingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
