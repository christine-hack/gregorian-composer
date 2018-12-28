import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChantOutputComponent } from './chant-output.component';

describe('ChantOutputComponent', () => {
  let component: ChantOutputComponent;
  let fixture: ComponentFixture<ChantOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChantOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChantOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
