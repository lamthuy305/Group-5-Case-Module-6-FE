import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHouseComponent } from './view-house.component';

describe('ViewHouseComponent', () => {
  let component: ViewHouseComponent;
  let fixture: ComponentFixture<ViewHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
