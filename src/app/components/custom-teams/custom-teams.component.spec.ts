import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTeamsComponent } from './custom-teams.component';

describe('CustomTeamsComponent', () => {
  let component: CustomTeamsComponent;
  let fixture: ComponentFixture<CustomTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTeamsComponent]
    });
    fixture = TestBed.createComponent(CustomTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
