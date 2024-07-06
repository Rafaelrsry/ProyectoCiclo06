import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Carousel } from '../../../models/carousel/carousel';
import { CarouselService } from '../../../service/carousel/carousel.service';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {


  carousel!:Carousel[];
  constructor(private carouselService: CarouselService){}

  ngOnInit() {
    this.carouselService.getCarousel().then(carousel => {
      this.carousel = carousel;
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
