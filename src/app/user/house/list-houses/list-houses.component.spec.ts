import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHousesComponent } from './list-houses.component';

describe('ListHousesComponent', () => {
  let component: ListHousesComponent;
  let fixture: ComponentFixture<ListHousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
