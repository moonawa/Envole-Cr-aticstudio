import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecastingComponent } from './listecasting.component';

describe('ListecastingComponent', () => {
  let component: ListecastingComponent;
  let fixture: ComponentFixture<ListecastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecastingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListecastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
