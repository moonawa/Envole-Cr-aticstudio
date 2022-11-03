import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifselectionComponent } from './modifselection.component';

describe('ModifselectionComponent', () => {
  let component: ModifselectionComponent;
  let fixture: ComponentFixture<ModifselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifselectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
