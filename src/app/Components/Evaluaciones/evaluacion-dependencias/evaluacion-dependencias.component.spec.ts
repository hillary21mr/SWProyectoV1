import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionDependenciasComponent } from './evaluacion-dependencias.component';

describe('EvaluacionDependenciasComponent', () => {
  let component: EvaluacionDependenciasComponent;
  let fixture: ComponentFixture<EvaluacionDependenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionDependenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionDependenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
