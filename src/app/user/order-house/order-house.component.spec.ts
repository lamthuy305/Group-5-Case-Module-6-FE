import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHouseComponent } from './order-house.component';

describe('OrderHouseComponent', () => {
  let component: OrderHouseComponent;
  let fixture: ComponentFixture<OrderHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
