import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackAndWhitePaintingsComponent } from './black-and-white-paintings.component';

describe('BlackAndWhitePaintingsComponent', () => {
  let component: BlackAndWhitePaintingsComponent;
  let fixture: ComponentFixture<BlackAndWhitePaintingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackAndWhitePaintingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackAndWhitePaintingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
