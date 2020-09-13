import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiColorArtComponent } from './multi-color-art.component';

describe('MultiColorArtComponent', () => {
  let component: MultiColorArtComponent;
  let fixture: ComponentFixture<MultiColorArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiColorArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiColorArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
