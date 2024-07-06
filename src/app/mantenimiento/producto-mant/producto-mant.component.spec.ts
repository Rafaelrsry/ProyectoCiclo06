import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoMantComponent } from './producto-mant.component';

describe('ProductoMantComponent', () => {
  let component: ProductoMantComponent;
  let fixture: ComponentFixture<ProductoMantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoMantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoMantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
