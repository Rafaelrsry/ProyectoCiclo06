import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from '../components/footer/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule,ButtonModule,FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{

    constructor(private router: Router, 
        private route: ActivatedRoute,
       
      ){
    
      }

      irHome():void{
        this.router.navigate(["home"], {relativeTo: this.route})
      }

      irLogin():void{
        this.router.navigate(["login"], {relativeTo: this.route})
      }

      irRegistro():void{
        this.router.navigate(["registro"], {relativeTo: this.route})
      }

      irContactanos():void{
        this.router.navigate(["contactanos"], {relativeTo: this.route})
      }
      irProductos():void{
        this.router.navigate(["productos"], {relativeTo: this.route})
      }
      irEditProductos():void{
        this.router.navigate(["editproductos"], {relativeTo: this.route})
      }

      irPerfil():void{
        this.router.navigate(["perfil"], {relativeTo: this.route})
      }


  items: MenuItem[] | undefined;
  imageLogo: string = '/assets/logoapp.webp';

  ngOnInit() {
    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => this.irHome()
        },
      
        {
            label: 'Productos',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Productos',
                    icon: 'pi pi-shopping-bag',
                    shortcut: '⌘+S',
                    command: () => this.irProductos()
                },
                {
                    label: 'Matenimiento Productos',
                    icon: 'pi-clipboard',
                    shortcut: '⌘+B',
                    command: () => this.irEditProductos()
                }]
        },
        {
            label: 'Contactanos',
            icon: 'pi pi-envelope',
            command: () => this.irContactanos()
        },
        {
            label: 'Perfil',
            icon: 'pi pi-user',
            command: () => this.irPerfil()
        }
    ];
}

}
