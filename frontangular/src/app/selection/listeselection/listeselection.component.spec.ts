import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeselectionComponent } from './listeselection.component';

describe('ListeselectionComponent', () => {
  let component: ListeselectionComponent;
  let fixture: ComponentFixture<ListeselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeselectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
