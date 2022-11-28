import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineurComponent } from './mineur.component';

describe('MineurComponent', () => {
  let component: MineurComponent;
  let fixture: ComponentFixture<MineurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MineurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MineurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
