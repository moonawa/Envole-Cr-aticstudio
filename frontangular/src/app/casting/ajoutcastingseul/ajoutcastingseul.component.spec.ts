import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcastingseulComponent } from './ajoutcastingseul.component';

describe('AjoutcastingseulComponent', () => {
  let component: AjoutcastingseulComponent;
  let fixture: ComponentFixture<AjoutcastingseulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutcastingseulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutcastingseulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
