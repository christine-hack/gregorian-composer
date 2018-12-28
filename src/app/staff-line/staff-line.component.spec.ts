import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLineComponent } from './staff-line.component';

describe('StaffLineComponent', () => {
  let component: StaffLineComponent;
  let fixture: ComponentFixture<StaffLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
