import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPeriodoComponent } from './asignar-periodo.component';

describe('AsignarPeriodoComponent', () => {
  let component: AsignarPeriodoComponent;
  let fixture: ComponentFixture<AsignarPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarPeriodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
