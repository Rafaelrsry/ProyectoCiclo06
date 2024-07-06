import { Component } from '@angular/core';
import { RegistroComponent } from '../auth/registro/registro.component';

@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [RegistroComponent],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent {

}
