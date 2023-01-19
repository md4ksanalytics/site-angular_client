import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovdtlComponent } from './lovdtl.component';

describe('LovdtlComponent', () => {
  let component: LovdtlComponent;
  let fixture: ComponentFixture<LovdtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LovdtlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LovdtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
