import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifcolaborateurComponent } from './modifcolaborateur.component';

describe('ModifcolaborateurComponent', () => {
  let component: ModifcolaborateurComponent;
  let fixture: ComponentFixture<ModifcolaborateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifcolaborateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifcolaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
