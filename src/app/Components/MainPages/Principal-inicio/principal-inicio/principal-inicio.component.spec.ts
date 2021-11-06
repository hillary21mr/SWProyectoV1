import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalInicioComponent } from './principal-inicio.component';

describe('PrincipalInicioComponent', () => {
  let component: PrincipalInicioComponent;
  let fixture: ComponentFixture<PrincipalInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
