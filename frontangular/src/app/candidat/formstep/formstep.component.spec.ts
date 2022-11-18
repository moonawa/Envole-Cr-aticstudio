import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstepComponent } from './formstep.component';

describe('FormstepComponent', () => {
  let component: FormstepComponent;
  let fixture: ComponentFixture<FormstepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormstepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



