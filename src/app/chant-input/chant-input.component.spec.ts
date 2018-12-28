import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChantInputComponent } from './chant-input.component';

describe('ChantInputComponent', () => {
  let component: ChantInputComponent;
  let fixture: ComponentFixture<ChantInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChantInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChantInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
