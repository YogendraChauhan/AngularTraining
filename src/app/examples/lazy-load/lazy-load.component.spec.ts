import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadComponent } from './lazy-load.component';
import { LazyLoadRoutingModule } from './lazy-load-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LazyLoadComponent', () => {
  let component: LazyLoadComponent;
  let fixture: ComponentFixture<LazyLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LazyLoadComponent, Page1Component, Page2Component, Page3Component],
      imports: [
        RouterTestingModule,
        LazyLoadRoutingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
