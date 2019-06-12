import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormExampleComponent } from './template-driven-form-example.component';
import { FormsModule } from '@angular/forms';
import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';

describe('TemplateDrivenFormExampleComponent', () => {
  let component: TemplateDrivenFormExampleComponent;
  let fixture: ComponentFixture<TemplateDrivenFormExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormExampleComponent, CustomInputComponent],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
