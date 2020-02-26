import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaranjaComponent } from './naranja.component';

describe('NaranjaComponent', () => {
  let component: NaranjaComponent;
  let fixture: ComponentFixture<NaranjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaranjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaranjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
