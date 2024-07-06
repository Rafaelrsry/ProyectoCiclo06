import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosHomeComponent } from './nosotros-home.component';

describe('NosotrosHomeComponent', () => {
  let component: NosotrosHomeComponent;
  let fixture: ComponentFixture<NosotrosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosotrosHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosotrosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
