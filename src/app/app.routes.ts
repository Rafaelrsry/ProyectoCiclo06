import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { NosotrosHomeComponent } from './components/nosotrosHome/nosotros-home/nosotros-home.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ProductosComponent } from './productos/productos.component';
import { LogComponent } from './log/log.component';
import { RegComponent } from './reg/reg.component';
import { ProductoMantComponent } from './mantenimiento/producto-mant/producto-mant.component';

import { PerfilComponent } from './perfil/perfil.component';



export const routes: Routes = [

  
  {path:"login",component: LogComponent},
  {path:"registro",component: RegComponent},

    {
      path: "",
      component: LayoutComponent,
      children: [
        { path: "home", component: HomeComponent },
        { path: "contactanos", component: ContactanosComponent},
        { path: "productos", component: ProductosComponent},
        { path: "perfil", component: PerfilComponent},
        { path: "editproductos", component: ProductoMantComponent},
        
        {
          path: 'nosotros/:id',
          component: NosotrosHomeComponent
        },  {
          path: 'contactanos/:id',
          component: ContactanosComponent
        },
      
        { path: "**", redirectTo: "home", pathMatch: "full" } // Redirección desde la raíz hacia /home
      ]
    }
    
];
