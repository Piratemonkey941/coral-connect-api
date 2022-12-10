import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalciumModalComponent } from './calcium-modal.component';

describe('CalciumModalComponent', () => {
  let component: CalciumModalComponent;
  let fixture: ComponentFixture<CalciumModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalciumModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalciumModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
