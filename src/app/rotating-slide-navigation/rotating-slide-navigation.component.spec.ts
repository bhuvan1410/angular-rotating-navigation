import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingSlideNavigationComponent } from './rotating-slide-navigation.component';

describe('RotatingSlideNavigationComponent', () => {
  let component: RotatingSlideNavigationComponent;
  let fixture: ComponentFixture<RotatingSlideNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotatingSlideNavigationComponent]
    });
    fixture = TestBed.createComponent(RotatingSlideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
