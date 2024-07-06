import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanosCompComponent } from './contactanos-comp.component';

describe('ContactanosCompComponent', () => {
  let component: ContactanosCompComponent;
  let fixture: ComponentFixture<ContactanosCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactanosCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactanosCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
