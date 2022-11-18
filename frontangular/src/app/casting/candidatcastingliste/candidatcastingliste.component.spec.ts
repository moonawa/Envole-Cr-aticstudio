import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatcastinglisteComponent } from './candidatcastingliste.component';

describe('CandidatcastinglisteComponent', () => {
  let component: CandidatcastinglisteComponent;
  let fixture: ComponentFixture<CandidatcastinglisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatcastinglisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatcastinglisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
