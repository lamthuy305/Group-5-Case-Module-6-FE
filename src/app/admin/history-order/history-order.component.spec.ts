import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOrderComponent } from './history-order.component';

describe('HistoryOrderComponent', () => {
  let component: HistoryOrderComponent;
  let fixture: ComponentFixture<HistoryOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
