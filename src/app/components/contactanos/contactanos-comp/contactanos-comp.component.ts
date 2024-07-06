import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {  ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Contactanos } from '../../../models/contactanos/contactanos';
import { ContactanosService } from '../../../service/contactanos/contactanos.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-contactanos-comp',
  standalone: true,
  imports: [ReactiveFormsModule,CardModule,DividerModule,FormsModule, InputTextModule, FloatLabelModule,InputTextareaModule,ButtonModule,DialogModule,CommonModule],
  templateUrl: './contactanos-comp.component.html',
  styleUrl: './contactanos-comp.component.css'
})
export class ContactanosCompComponent implements OnInit {

  row: { idcontactanos: number };
  
  value: string | undefined;
  contactanos: Contactanos[] =[]
  visible: boolean = false;

    showDialog() {
        this.visible = true;
        const idContactanos = this.row.idcontactanos;
        // Lógica para abrir el modal y cargar los datos basados en idContactanos
        console.log(idContactanos); // P
     
    }

    
    idcontactanos: string | null = '';
    contactanosFrm!: FormGroup;
 
    openModal(row: any) {
      this.row = row;
      this.contactanosFrm.patchValue({
        idcontactanos: row.idcontactanos,
        titulo: row.titulo,
        descripciontitulo: row.descripciontitulo,
        llamanos: row.llamanos,
        descripcionllamanos: row.descripcionllamanos,
        correo: row.correo,
        descripcioncorreo: row.descripcioncorreo
      });
      this.visible = true;
    }

    constructor(
      private contactanoService: ContactanosService, private route: ActivatedRoute,
      private router: Router) {
        this.row = { idcontactanos: 1 };
      }

      ngOnInit(): void {

        this.contactanosFrm =this.formulario();

        this.idcontactanos = this.route.snapshot.paramMap.get('id');
        this.contactanosFrm = this.formulario();
    
        this.cargarContactanos(parseInt(this.idcontactanos!)); 
       


        this.contactanoService.getAllContactanos()
        .subscribe((data) => {
          console.log(data);
          this.contactanos = data;
        })



      }

      formulario(): FormGroup{
        return new FormGroup({
            idcontactanos: new FormControl(''),
            titulo: new FormControl(''),
            descripciontitulo: new FormControl(''),
            llamanos: new FormControl(''),
            descripcionllamanos: new FormControl(''),
            correo: new FormControl(''),
            descripcioncorreo: new FormControl(''),
        })
     
    }


    
cargarContactanos(idcontactanos: number): void {
  this.contactanoService.getContactanosId(idcontactanos).subscribe(
    (data) => {
      const { idcontactanos, titulo, descripciontitulo,llamanos,descripcionllamanos,correo,descripcioncorreo } = data;
      this.contactanosFrm.setValue({ idcontactanos, titulo, descripciontitulo,llamanos,descripcionllamanos,correo,descripcioncorreo });
    }
  );
}



crear(): void {
 
    this.registrarContactanos(this.contactanosFrm.value);
  
}

actualizar():void{

  const postValue = { ...this.contactanosFrm.value, id: this.idcontactanos };
  this.actualizarContactanos(postValue);

 
}

registrarContactanos(contactanos: Contactanos): void {
  this.contactanoService.createContactanos(contactanos).subscribe(
    (data) => {
      console.log(data);
    }
  );
}

actualizarContactanos(contactanos: Contactanos): void {
  this.contactanoService.updateContactanos(contactanos).subscribe(
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
