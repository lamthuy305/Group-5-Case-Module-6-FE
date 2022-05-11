import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHomeComponent } from './sidebar-home.component';

describe('SidebarHomeComponent', () => {
  let component: SidebarHomeComponent;
  let fixture: ComponentFixture<SidebarHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
