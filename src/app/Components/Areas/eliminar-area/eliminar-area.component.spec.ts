import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAreaComponent } from './eliminar-area.component';

describe('EliminarAreaComponent', () => {
  let component: EliminarAreaComponent;
  let fixture: ComponentFixture<EliminarAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
