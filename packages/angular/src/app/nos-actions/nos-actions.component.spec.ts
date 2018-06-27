import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosActionsComponent } from './nos-actions.component';

describe('NosActionsComponent', () => {
  let component: NosActionsComponent;
  let fixture: ComponentFixture<NosActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosActionsComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
