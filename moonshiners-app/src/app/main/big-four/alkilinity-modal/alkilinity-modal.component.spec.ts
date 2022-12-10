import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkilinityModalComponent } from './alkilinity-modal.component';

describe('AlkilinityModalComponent', () => {
  let component: AlkilinityModalComponent;
  let fixture: ComponentFixture<AlkilinityModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlkilinityModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlkilinityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
