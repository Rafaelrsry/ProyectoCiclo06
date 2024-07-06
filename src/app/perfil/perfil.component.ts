import { Component } from '@angular/core';
import { PerfilMantComponent } from '../mantenimiento/perfil-mant/perfil-mant.component';
import { TestimonialsMantComponent } from '../mantenimiento/testimonials-mant/testimonials-mant.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [PerfilMantComponent,TestimonialsMantComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

}
