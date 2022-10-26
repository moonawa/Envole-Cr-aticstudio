import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcoloborateurComponent } from './detailcoloborateur.component';

describe('DetailcoloborateurComponent', () => {
  let component: DetailcoloborateurComponent;
  let fixture: ComponentFixture<DetailcoloborateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcoloborateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcoloborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
