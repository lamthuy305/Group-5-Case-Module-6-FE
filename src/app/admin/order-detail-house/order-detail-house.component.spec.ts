import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailHouseComponent } from './order-detail-house.component';

describe('OrderDetailHouseComponent', () => {
  let component: OrderDetailHouseComponent;
  let fixture: ComponentFixture<OrderDetailHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
