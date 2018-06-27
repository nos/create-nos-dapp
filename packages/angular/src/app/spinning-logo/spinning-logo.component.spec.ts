import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinningLogoComponent } from './spinning-logo.component';

describe('SpinningLogoComponent', () => {
  let component: SpinningLogoComponent;
  let fixture: ComponentFixture<SpinningLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinningLogoComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinningLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
