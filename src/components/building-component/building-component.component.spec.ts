import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingComponentComponent } from './building-component.component';

describe('BuildingComponentComponent', () => {
  let component: BuildingComponentComponent;
  let fixture: ComponentFixture<BuildingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
