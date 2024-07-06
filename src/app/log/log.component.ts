import { Component } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {

}
