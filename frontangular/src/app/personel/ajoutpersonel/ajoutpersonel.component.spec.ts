import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutpersonelComponent } from './ajoutpersonel.component';

describe('AjoutpersonelComponent', () => {
  let component: AjoutpersonelComponent;
  let fixture: ComponentFixture<AjoutpersonelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutpersonelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutpersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
