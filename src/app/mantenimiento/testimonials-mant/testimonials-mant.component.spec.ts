import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsMantComponent } from './testimonials-mant.component';

describe('TestimonialsMantComponent', () => {
  let component: TestimonialsMantComponent;
  let fixture: ComponentFixture<TestimonialsMantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsMantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonialsMantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
