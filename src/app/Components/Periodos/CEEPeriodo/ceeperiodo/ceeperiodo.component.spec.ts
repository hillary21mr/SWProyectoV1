import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEEPeriodoComponent } from './ceeperiodo.component';

describe('CEEPeriodoComponent', () => {
  let component: CEEPeriodoComponent;
  let fixture: ComponentFixture<CEEPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CEEPeriodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CEEPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
