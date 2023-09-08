import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterUsernameComponent } from './enter-username.component';

describe('EnterUsernameComponent', () => {
  let component: EnterUsernameComponent;
  let fixture: ComponentFixture<EnterUsernameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterUsernameComponent]
    });
    fixture = TestBed.createComponent(EnterUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
