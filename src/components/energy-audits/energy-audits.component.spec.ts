import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyAuditsComponent } from './energy-audits.component';

describe('EnergyAuditsComponent', () => {
  let component: EnergyAuditsComponent;
  let fixture: ComponentFixture<EnergyAuditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyAuditsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyAuditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
