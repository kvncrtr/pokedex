import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSpecsComponent } from './poke-specs.component';

describe('PokeSpecsComponent', () => {
  let component: PokeSpecsComponent;
  let fixture: ComponentFixture<PokeSpecsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeSpecsComponent]
    });
    fixture = TestBed.createComponent(PokeSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
