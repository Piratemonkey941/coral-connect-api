import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorElemsComponent } from './minor-elems.component';

describe('MinorElemsComponent', () => {
  let component: MinorElemsComponent;
  let fixture: ComponentFixture<MinorElemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorElemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinorElemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
