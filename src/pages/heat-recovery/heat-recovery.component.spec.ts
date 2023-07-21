import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatRecoveryComponent } from './heat-recovery.component';

describe('HeatRecoveryComponent', () => {
  let component: HeatRecoveryComponent;
  let fixture: ComponentFixture<HeatRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatRecoveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
