import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuselectComponent } from './addmenu.component';

describe('MenuselectComponent', () => {
  let component: MenuselectComponent;
  let fixture: ComponentFixture<MenuselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
