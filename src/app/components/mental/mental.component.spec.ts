import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalComponent } from './mental.component';

describe('MentalComponent', () => {
  let component: MentalComponent;
  let fixture: ComponentFixture<MentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
