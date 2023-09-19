import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotbarComponent } from './hotbar.component';

describe('HotbarComponent', () => {
  let component: HotbarComponent;
  let fixture: ComponentFixture<HotbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotbarComponent]
    });
    fixture = TestBed.createComponent(HotbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
