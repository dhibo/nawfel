import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilosphyComponent } from './philosphy.component';

describe('PhilosphyComponent', () => {
  let component: PhilosphyComponent;
  let fixture: ComponentFixture<PhilosphyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilosphyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhilosphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
