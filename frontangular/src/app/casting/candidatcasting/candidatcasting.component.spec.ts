import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatcastingComponent } from './candidatcasting.component';

describe('CandidatcastingComponent', () => {
  let component: CandidatcastingComponent;
  let fixture: ComponentFixture<CandidatcastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatcastingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatcastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
