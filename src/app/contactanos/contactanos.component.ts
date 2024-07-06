import { Component } from '@angular/core';
import { ContactanosCompComponent } from '../components/contactanos/contactanos-comp/contactanos-comp.component';
import { FooterComponent } from '../components/footer/footer/footer.component';
import { MininavComponent } from '../components/mininav/mininav/mininav.component';

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [ContactanosCompComponent,MininavComponent],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {

}
