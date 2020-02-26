import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ArrastrarYSoltarComponent } from './arrastrar-ysoltar.component';

describe('ArrastrarYSoltarComponent', () => {
  let component: ArrastrarYSoltarComponent;
  let fixture: ComponentFixture<ArrastrarYSoltarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrastrarYSoltarComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrastrarYSoltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
