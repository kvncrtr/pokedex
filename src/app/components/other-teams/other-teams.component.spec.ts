import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherTeamsComponent } from './other-teams.component';

describe('OtherTeamsComponent', () => {
  let component: OtherTeamsComponent;
  let fixture: ComponentFixture<OtherTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherTeamsComponent]
    });
    fixture = TestBed.createComponent(OtherTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
