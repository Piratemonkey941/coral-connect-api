import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnesiumModalComponent } from './magnesium-modal.component';

describe('MagnesiumModalComponent', () => {
  let component: MagnesiumModalComponent;
  let fixture: ComponentFixture<MagnesiumModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagnesiumModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnesiumModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
