import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcneComponent } from './acne.component';

describe('AcneComponent', () => {
  let component: AcneComponent;
  let fixture: ComponentFixture<AcneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
