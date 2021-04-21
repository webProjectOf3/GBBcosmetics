import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetails4Component } from './product-details4.component';

describe('ProductDetails4Component', () => {
  let component: ProductDetails4Component;
  let fixture: ComponentFixture<ProductDetails4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetails4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetails4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
