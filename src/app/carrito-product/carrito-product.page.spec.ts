import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoProductPage } from './carrito-product.page';

describe('CarritoProductPage', () => {
  let component: CarritoProductPage;
  let fixture: ComponentFixture<CarritoProductPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
