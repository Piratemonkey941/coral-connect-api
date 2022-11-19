import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinerSystemComponent } from './shiner-system.component';

describe('ShinerSystemComponent', () => {
  let component: ShinerSystemComponent;
  let fixture: ComponentFixture<ShinerSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShinerSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShinerSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
