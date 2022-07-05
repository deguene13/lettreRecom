import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichLettreComponent } from './affich-lettre.component';

describe('AffichLettreComponent', () => {
  let component: AffichLettreComponent;
  let fixture: ComponentFixture<AffichLettreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichLettreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichLettreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
