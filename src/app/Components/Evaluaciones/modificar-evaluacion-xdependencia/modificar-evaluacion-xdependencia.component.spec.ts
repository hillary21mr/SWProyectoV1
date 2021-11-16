import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEvaluacionXDependenciaComponent } from './modificar-evaluacion-xdependencia.component';

describe('ModificarEvaluacionXDependenciaComponent', () => {
  let component: ModificarEvaluacionXDependenciaComponent;
  let fixture: ComponentFixture<ModificarEvaluacionXDependenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarEvaluacionXDependenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarEvaluacionXDependenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
