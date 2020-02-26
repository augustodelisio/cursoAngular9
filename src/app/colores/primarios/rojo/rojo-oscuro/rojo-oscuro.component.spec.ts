import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RojoOscuroComponent } from './rojo-oscuro.component';

describe('RojoOscuroComponent', () => {
  let component: RojoOscuroComponent;
  let fixture: ComponentFixture<RojoOscuroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RojoOscuroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RojoOscuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
