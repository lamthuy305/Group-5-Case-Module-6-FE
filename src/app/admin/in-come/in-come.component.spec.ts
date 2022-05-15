import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InComeComponent } from './in-come.component';

describe('InComeComponent', () => {
  let component: InComeComponent;
  let fixture: ComponentFixture<InComeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InComeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InComeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
