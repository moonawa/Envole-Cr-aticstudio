import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiffournisseurComponent } from './modiffournisseur.component';

describe('ModiffournisseurComponent', () => {
  let component: ModiffournisseurComponent;
  let fixture: ComponentFixture<ModiffournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiffournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModiffournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
