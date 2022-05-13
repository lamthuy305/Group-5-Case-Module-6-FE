import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHouseComponent } from './detail-house.component';

describe('DetailHouseComponent', () => {
  let component: DetailHouseComponent;
  let fixture: ComponentFixture<DetailHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
