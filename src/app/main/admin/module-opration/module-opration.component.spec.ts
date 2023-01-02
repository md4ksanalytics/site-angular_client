import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOprationComponent } from './module-opration.component';

describe('ModuleOprationComponent', () => {
  let component: ModuleOprationComponent;
  let fixture: ComponentFixture<ModuleOprationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleOprationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleOprationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
