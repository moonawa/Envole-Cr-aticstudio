import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcastingComponent } from './detailcasting.component';

describe('DetailcastingComponent', () => {
  let component: DetailcastingComponent;
  let fixture: ComponentFixture<DetailcastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcastingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
