import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToTOPComponent } from './back-to-top.component';

describe('BackToTOPComponent', () => {
  let component: BackToTOPComponent;
  let fixture: ComponentFixture<BackToTOPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackToTOPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackToTOPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
