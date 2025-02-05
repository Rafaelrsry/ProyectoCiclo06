import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MininavComponent } from './mininav.component';

describe('MininavComponent', () => {
  let component: MininavComponent;
  let fixture: ComponentFixture<MininavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MininavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MininavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
