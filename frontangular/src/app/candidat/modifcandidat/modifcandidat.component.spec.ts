import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifcandidatComponent } from './modifcandidat.component';

describe('ModifcandidatComponent', () => {
  let component: ModifcandidatComponent;
  let fixture: ComponentFixture<ModifcandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifcandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
