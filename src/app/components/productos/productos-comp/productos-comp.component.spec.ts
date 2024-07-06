import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCompComponent } from './productos-comp.component';

describe('ProductosCompComponent', () => {
  let component: ProductosCompComponent;
  let fixture: ComponentFixture<ProductosCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
