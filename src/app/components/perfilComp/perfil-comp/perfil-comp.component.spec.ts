import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCompComponent } from './perfil-comp.component';

describe('PerfilCompComponent', () => {
  let component: PerfilCompComponent;
  let fixture: ComponentFixture<PerfilCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
