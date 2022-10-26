import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcandidatComponent } from './detailcandidat.component';

describe('DetailcandidatComponent', () => {
  let component: DetailcandidatComponent;
  let fixture: ComponentFixture<DetailcandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
