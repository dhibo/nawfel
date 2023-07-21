import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingComponentsComponent } from './consulting-components.component';

describe('ConsultingComponentsComponent', () => {
  let component: ConsultingComponentsComponent;
  let fixture: ComponentFixture<ConsultingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultingComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
