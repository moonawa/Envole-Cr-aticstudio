import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcastingComponent } from './ajoutcasting.component';

describe('AjoutcastingComponent', () => {
  let component: AjoutcastingComponent;
  let fixture: ComponentFixture<AjoutcastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutcastingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutcastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
