import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormExampleComponent } from './reactive-form-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';

describe('ReactiveFormExampleComponent', () => {
  let component: ReactiveFormExampleComponent;
  let fixture: ComponentFixture<ReactiveFormExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormExampleComponent, CustomInputComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
