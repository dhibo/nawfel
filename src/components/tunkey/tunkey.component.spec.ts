import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunkeyComponent } from './tunkey.component';

describe('TunkeyComponent', () => {
  let component: TunkeyComponent;
  let fixture: ComponentFixture<TunkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunkeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TunkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
