import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletarEvaluacionXDependenciaComponent } from './completar-evaluacion-xdependencia.component';

describe('CompletarEvaluacionXDependenciaComponent', () => {
  let component: CompletarEvaluacionXDependenciaComponent;
  let fixture: ComponentFixture<CompletarEvaluacionXDependenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletarEvaluacionXDependenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletarEvaluacionXDependenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
