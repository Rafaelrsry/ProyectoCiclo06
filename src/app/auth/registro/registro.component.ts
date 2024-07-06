import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ButtonModule,InputTextModule,CheckboxModule,FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor(private router: Router, 
    private route: ActivatedRoute,
   
  ){

  }

  genero: string[] = [];
  irLogin():void{
    this.router.navigate(["login"])
  }
}
