import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajeurComponent } from './majeur.component';

describe('MajeurComponent', () => {
  let component: MajeurComponent;
  let fixture: ComponentFixture<MajeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
