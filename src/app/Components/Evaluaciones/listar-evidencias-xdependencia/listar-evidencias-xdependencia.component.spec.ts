import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEvidenciasXdependenciaComponent } from './listar-evidencias-xdependencia.component';

describe('ListarEvidenciasXdependenciaComponent', () => {
  let component: ListarEvidenciasXdependenciaComponent;
  let fixture: ComponentFixture<ListarEvidenciasXdependenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEvidenciasXdependenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEvidenciasXdependenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
