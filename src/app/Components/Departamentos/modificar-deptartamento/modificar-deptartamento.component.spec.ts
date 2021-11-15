import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDeptartamentoComponent } from './modificar-deptartamento.component';

describe('ModificarDeptartamentoComponent', () => {
  let component: ModificarDeptartamentoComponent;
  let fixture: ComponentFixture<ModificarDeptartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDeptartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDeptartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
