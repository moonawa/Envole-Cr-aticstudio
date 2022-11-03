import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifcastingComponent } from './modifcasting.component';

describe('ModifcastingComponent', () => {
  let component: ModifcastingComponent;
  let fixture: ComponentFixture<ModifcastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifcastingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifcastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
