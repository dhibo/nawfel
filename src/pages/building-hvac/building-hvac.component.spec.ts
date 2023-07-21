import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingHvacComponent } from './building-hvac.component';

describe('BuildingHvacComponent', () => {
  let component: BuildingHvacComponent;
  let fixture: ComponentFixture<BuildingHvacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingHvacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingHvacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
