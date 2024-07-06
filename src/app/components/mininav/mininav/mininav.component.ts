import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-mininav',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './mininav.component.html',
  styleUrl: './mininav.component.css'
})
export class MininavComponent {
  imageLogo: string = '/assets/logoapp.webp';
}
