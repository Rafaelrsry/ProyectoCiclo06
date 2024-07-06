import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { Usuario } from '../../models/usuario/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-perfil-mant',
  standalone: true,
  imports: [ButtonModule,DividerModule,InputTextModule,CommonModule,DialogModule],
  templateUrl: './perfil-mant.component.html',
  styleUrl: './perfil-mant.component.css'
})
export class PerfilMantComponent implements OnInit {

  row: { idusuario: number };
  visible: boolean = false;
  idusuario: string | null = '';
  usuario: Usuario[] =[]
  usuarioFrm!: FormGroup;
  showDialog() {
      this.visible = true;
  }


  constructor(
    private usuarioService: UsuarioService,private route: ActivatedRoute,
    private router: Router) {
     this.row = { idusuario: 1 };
    }


    openModal(row: any) {
      this.row = row;
      this.usuarioFrm.patchValue({
        idusuario: row.idusuario,
        genero: row.genero,
        activo: row.activo,
        apellidos: row.apellidos,
        documento: row.documento,
        email: row.email,
        nombres: row.nombres,
        nomusuario: row.nomusuario,
        password: row.password,
        rutafotoperfil: row.rutafotoperfil
      });
      this.visible = true;
    }

    ngOnInit(): void {

      this.usuarioFrm =this.formulario();

      this.idusuario = this.route.snapshot.paramMap.get('id');
      this.usuarioFrm = this.formulario();
  
      this.cargarUsuarios(parseInt(this.idusuario!)); 
     


      this.usuarioService.getAllUsuario()
      .subscribe((data) => {
        console.log(data);
        this.usuario = data;
      })



    }


    cargarUsuarios(idusuario: number): void {
      this.usuarioService.getUsuarioId(idusuario).subscribe(
        (data) => {
          const { idusuario, genero, activo,apellidos,documento,email,nombres,nomusuario,rutafotoperfil } = data;
          this.usuarioFrm.setValue({ idusuario, genero, activo,apellidos,documento,email,nombres,nomusuario,rutafotoperfil  });
        }
      );
    }


  imageLogo: string = '/assets/logoapp.webp';
  formulario(): FormGroup{
    return new FormGroup({
        idusuario: new FormControl(''),
        genero: new FormControl(''),
        activo: new FormControl(''),
        apellidos: new FormControl(''),
        documento: new FormControl(''),
        email: new FormControl(''),
        nombres: new FormControl(''),
        nomusuario: new FormControl(''),
        password: new FormControl(''),
        rutafotoperfil: new FormControl(''),
    })

 
}


crear(): void {
 
  this.registrarUsuario(this.usuarioFrm.value);

}

actualizar():void{

const postValue = { ...this.usuarioFrm.value, id: this.idusuario };
this.actualizarContactanos(postValue);


}

registrarUsuario(usuario: Usuario): void {
this.usuarioService.createUsuario(usuario).subscribe(
  (data) => {
    console.log(data);
  }
);
}

actualizarContactanos(usuario: Usuario): void {
this.usuarioService.updateUsuario(usuario).subscribe(
  (data) => {
    console.log(data);
    this.visible = false;
    // Refresca la página después de actualizar los datos
    window.location.reload();
  },
  (error) => {
    console.error('Error al actualizar los datos', error);
  }
);
}

}