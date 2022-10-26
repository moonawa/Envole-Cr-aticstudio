import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpersonelComponent } from './detailpersonel.component';

describe('DetailpersonelComponent', () => {
  let component: DetailpersonelComponent;
  let fixture: ComponentFixture<DetailpersonelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpersonelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailpersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
