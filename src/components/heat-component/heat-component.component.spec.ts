import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatComponentComponent } from './heat-component.component';

describe('HeatComponentComponent', () => {
  let component: HeatComponentComponent;
  let fixture: ComponentFixture<HeatComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
