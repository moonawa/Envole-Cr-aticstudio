import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutfournisseurComponent } from './ajoutfournisseur.component';

describe('AjoutfournisseurComponent', () => {
  let component: AjoutfournisseurComponent;
  let fixture: ComponentFixture<AjoutfournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutfournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
