import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMantComponent } from './perfil-mant.component';

describe('PerfilMantComponent', () => {
  let component: PerfilMantComponent;
  let fixture: ComponentFixture<PerfilMantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilMantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilMantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
