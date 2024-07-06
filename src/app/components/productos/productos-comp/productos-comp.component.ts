import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../../models/product/product';
import { ProductService } from '../../../service/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos-comp',
  standalone: true,
  imports: [CardModule, ButtonModule,CommonModule],
  templateUrl: './productos-comp.component.html',
  styleUrl: './productos-comp.component.css'
})
export class ProductosCompComponent implements OnInit{
  
  producto: Product[] = []

  constructor(private productoservice: ProductService) {
      
      //this.row = { idnosotros: 1 };

    }

    ngOnInit():void {
  
    
     
   
      this.productoservice.getAllProducto()
      .subscribe((data) => {
        console.log(data);
        this.producto = data;
      })


}

}
