import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringServicesComponent } from './engineering-services.component';

describe('EngineeringServicesComponent', () => {
  let component: EngineeringServicesComponent;
  let fixture: ComponentFixture<EngineeringServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeringServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineeringServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
