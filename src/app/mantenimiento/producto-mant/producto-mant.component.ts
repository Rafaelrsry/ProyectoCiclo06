import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../models/product/product';
import { ProductService } from '../../service/product/product.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-producto-mant',
  standalone: true,
  imports: [TableModule, TagModule, RatingModule, ButtonModule, CommonModule,FormsModule],
  templateUrl: './producto-mant.component.html',
  styleUrl: './producto-mant.component.css'
})
export class ProductoMantComponent implements OnInit {

  products!: Product[];
  
  producto: Product[] = []

  constructor(private productService: ProductService) {}

  ngOnInit() {
     

      this.productService.getAllProducto()
      .subscribe((data) => {
        console.log(data);
        this.producto = data;
      })

  }

  getSeverity(status: string): "success" | "secondary" | "info" | "warning" | "danger" | "contrast" | undefined {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined; // Devuelve undefined si no hay coincidencia
    }
  }
}
