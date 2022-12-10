import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalinityModalComponent } from './salinity-modal.component';

describe('SalinityModalComponent', () => {
  let component: SalinityModalComponent;
  let fixture: ComponentFixture<SalinityModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalinityModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalinityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
