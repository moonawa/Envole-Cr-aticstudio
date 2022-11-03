import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutselectionComponent } from './ajoutselection.component';

describe('AjoutselectionComponent', () => {
  let component: AjoutselectionComponent;
  let fixture: ComponentFixture<AjoutselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutselectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
