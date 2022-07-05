import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherNumeComponent } from './rechercher-nume.component';

describe('RechercherNumeComponent', () => {
  let component: RechercherNumeComponent;
  let fixture: ComponentFixture<RechercherNumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherNumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherNumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
