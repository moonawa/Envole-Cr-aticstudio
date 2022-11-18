import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailselectionComponent } from './detailselection.component';

describe('DetailselectionComponent', () => {
  let component: DetailselectionComponent;
  let fixture: ComponentFixture<DetailselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailselectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
