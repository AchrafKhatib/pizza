import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurpizzaComponent } from './ourpizza.component';

describe('OurpizzaComponent', () => {
  let component: OurpizzaComponent;
  let fixture: ComponentFixture<OurpizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurpizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
