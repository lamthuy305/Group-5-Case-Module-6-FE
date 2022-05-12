import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHouseComponent } from './edit-house.component';

describe('EditHouseComponent', () => {
  let component: EditHouseComponent;
  let fixture: ComponentFixture<EditHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
