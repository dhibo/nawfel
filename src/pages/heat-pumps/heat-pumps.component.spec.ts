import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatPumpsComponent } from './heat-pumps.component';

describe('HeatPumpsComponent', () => {
  let component: HeatPumpsComponent;
  let fixture: ComponentFixture<HeatPumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatPumpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatPumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
