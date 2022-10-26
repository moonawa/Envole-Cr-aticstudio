import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcandidatComponent } from './ajoutcandidat.component';

describe('AjoutcandidatComponent', () => {
  let component: AjoutcandidatComponent;
  let fixture: ComponentFixture<AjoutcandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutcandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
