import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimnarDepartamentoComponent } from './elimnar-departamento.component';

describe('ElimnarDepartamentoComponent', () => {
  let component: ElimnarDepartamentoComponent;
  let fixture: ComponentFixture<ElimnarDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElimnarDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElimnarDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
