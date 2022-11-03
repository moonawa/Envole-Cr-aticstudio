import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcandidatcastingComponent } from './ajoutcandidatcasting.component';

describe('AjoutcandidatcastingComponent', () => {
  let component: AjoutcandidatcastingComponent;
  let fixture: ComponentFixture<AjoutcandidatcastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutcandidatcastingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutcandidatcastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
