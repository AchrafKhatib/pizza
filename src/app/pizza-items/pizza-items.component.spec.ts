import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaItemsComponent } from './pizza-items.component';

describe('PizzaItemsComponent', () => {
  let component: PizzaItemsComponent;
  let fixture: ComponentFixture<PizzaItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
