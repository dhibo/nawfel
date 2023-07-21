import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarEnergyComponent } from './solar-energy.component';

describe('SolarEnergyComponent', () => {
  let component: SolarEnergyComponent;
  let fixture: ComponentFixture<SolarEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarEnergyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
