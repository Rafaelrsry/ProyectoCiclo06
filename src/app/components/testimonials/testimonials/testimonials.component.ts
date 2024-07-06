import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';


@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [DividerModule,FieldsetModule,AvatarModule,CardModule,AnimateOnScrollModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',styles: [
    `
        :host {
            @keyframes slidedown-icon {
                0% {
                    transform: translateY(0);
                }

                50% {
                    transform: translateY(20px);
                }

                100% {
                    transform: translateY(0);
                }
            }

            .slidedown-icon {
                animation: slidedown-icon;
                animation-duration: 3s;
                animation-iteration-count: infinite;
            }

            .box {
                background-image: radial-gradient(var(--primary-300), var(--primary-600));
                border-radius: 50% !important;
                color: var(--primary-color-text);
            }
        }
    `
]
})
export class TestimonialsComponent {

}
