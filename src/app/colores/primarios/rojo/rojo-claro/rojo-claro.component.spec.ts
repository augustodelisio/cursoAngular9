import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RojoClaroComponent } from './rojo-claro.component';

describe('RojoClaroComponent', () => {
  let component: RojoClaroComponent;
  let fixture: ComponentFixture<RojoClaroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RojoClaroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RojoClaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
