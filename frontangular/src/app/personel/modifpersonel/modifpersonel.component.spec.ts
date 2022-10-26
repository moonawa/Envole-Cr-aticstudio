import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifpersonelComponent } from './modifpersonel.component';

describe('ModifpersonelComponent', () => {
  let component: ModifpersonelComponent;
  let fixture: ComponentFixture<ModifpersonelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifpersonelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifpersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
