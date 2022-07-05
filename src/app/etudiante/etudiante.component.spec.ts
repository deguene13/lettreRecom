import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudianteComponent } from './etudiante.component';

describe('EtudianteComponent', () => {
  let component: EtudianteComponent;
  let fixture: ComponentFixture<EtudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
