import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { CarouselComponent } from '../components/carousel/carousel/carousel.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials/testimonials.component';
import { FooterComponent } from '../components/footer/footer/footer.component';
import { NosotrosHomeComponent } from '../components/nosotrosHome/nosotros-home/nosotros-home.component';
import { MininavComponent } from '../components/mininav/mininav/mininav.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent,CarouselComponent,TestimonialsComponent,FooterComponent,NosotrosHomeComponent,MininavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
