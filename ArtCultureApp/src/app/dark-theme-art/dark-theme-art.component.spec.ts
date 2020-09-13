import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkThemeArtComponent } from './dark-theme-art.component';

describe('DarkThemeArtComponent', () => {
  let component: DarkThemeArtComponent;
  let fixture: ComponentFixture<DarkThemeArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkThemeArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkThemeArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
