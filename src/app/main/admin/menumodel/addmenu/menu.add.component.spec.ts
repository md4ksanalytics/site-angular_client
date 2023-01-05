import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu.AddComponent } from './menu.add.component';

describe('Menu.AddComponent', () => {
  let component: Menu.AddComponent;
  let fixture: ComponentFixture<Menu.AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menu.AddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu.AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
