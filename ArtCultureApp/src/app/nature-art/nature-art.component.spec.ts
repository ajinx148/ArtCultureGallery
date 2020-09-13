import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureArtComponent } from './nature-art.component';

describe('NatureArtComponent', () => {
  let component: NatureArtComponent;
  let fixture: ComponentFixture<NatureArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatureArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
