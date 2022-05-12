import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHouseComponent } from './delete-house.component';

describe('DeleteHouseComponent', () => {
  let component: DeleteHouseComponent;
  let fixture: ComponentFixture<DeleteHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
