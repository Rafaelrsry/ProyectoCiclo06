import { Component } from '@angular/core';
import { ProductosCompComponent } from '../components/productos/productos-comp/productos-comp.component';

import { MininavComponent } from '../components/mininav/mininav/mininav.component';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [ProductosCompComponent,MininavComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
