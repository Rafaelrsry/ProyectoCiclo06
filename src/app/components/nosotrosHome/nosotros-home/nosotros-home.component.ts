import { Component, inject, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { Galeria } from '../../../models/galeria/galeria';
import { GaleriaService } from '../../../service/galeria/galeria.service';
import { DividerModule } from 'primeng/divider';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { NosotrosService } from '../../../service/nosotros/nosotros.service';
import { InputTextModule } from 'primeng/inputtext';
import { Nosotros } from '../../../models/nosotros/nosotros';
import { ActivatedRoute, Router } from '@angular/router';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-nosotros-home',
  standalone: true,
  imports: [GalleriaModule,DividerModule,ScrollPanelModule,AnimateOnScrollModule,DialogModule,ButtonModule,InputTextModule,FormsModule,InputTextareaModule,ReactiveFormsModule],
  templateUrl: './nosotros-home.component.html',
  styleUrl: './nosotros-home.component.css',styles: [
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
export class NosotrosHomeComponent implements OnInit {

    displayedColumns: string[] = ['idnosotros', 'titulo', 'descripcion'];
    visible: boolean = false;
    showDialog() {
        this.visible = true;
       // this.cargarNosotos(parseInt(this.idnosotros!)); 
       //  this.router.navigateByUrl('/nosotros/1');

       const idnosotros = this.row.idnosotros;
        // Lógica para abrir el modal y cargar los datos basados en idContactanos
        console.log(idnosotros); // P
    }
 
    irhome() {
      this.router.navigateByUrl('/home').then(() => {
        window.location.reload();
      });
    }
    idnosotros: string | null = '';
    nosotrosForm!: FormGroup;

    row: { idnosotros: number };
    openModal(row: any) {
      this.row = row;
      this.nosotrosForm.patchValue({
        idnosotros: row.idnosotros,
        titulo: row.titulo,
        descripcion: row.descripcion,
      });
      this.visible = true;
    }

   images!:Galeria[];
   nosotros: Nosotros[] = []


   private fb = inject(FormBuilder);
   private nosotrosServiced = inject(NosotrosService);
/*
   form = this.fb.group(
   {idnosotros:['',Validators.required],
    titulo:['',Validators.required],
    descripcion:['',Validators.required]
   } 
   )
*/

  constructor(private galeriaService: GaleriaService,
    private nosotrosService: NosotrosService,
    private route: ActivatedRoute,
    private router: Router) {
      
      this.row = { idnosotros: 1 };

    }

  
ngOnInit():void {
  
    
      this.nosotrosForm = this.formulario();
  
    this.idnosotros = this.route.snapshot.paramMap.get('id');
    this.nosotrosForm = this.formulario();

    this.cargarNosotos(parseInt(this.idnosotros!)); 
   

  this.galeriaService.getGaleria().then((images) => {
      this.images = images;
  });

 

  this.nosotrosService.getAllNosotros()
  .subscribe((data) => {
    console.log(data);
    this.nosotros = data;
  })

}


formulario(): FormGroup{
    return new FormGroup({
        idnosotros: new FormControl(''),
        titulo: new FormControl(''),
        descripcion: new FormControl(''),
    })
 
}

onNavigatePostDetail(nosotrosid: string): void {
    this.router.navigate([nosotrosid], {relativeTo: this.route});
  }


cargarNosotos(idnosotros: number): void {
    this.nosotrosService.getNosotrosId(idnosotros).subscribe(
      (data) => {
        const { idnosotros, titulo, descripcion } = data;
        this.nosotrosForm.setValue({ idnosotros, titulo, descripcion });
      }
    );
  }



  crear(): void {
   
      this.registrarNosotros(this.nosotrosForm.value);
    
  }

  actualizar():void{

    const postValue = { ...this.nosotrosForm.value, id: this.idnosotros };
    this.actualizarNosotros(postValue);
  
  }

  registrarNosotros(nosotros: Nosotros): void {
    this.nosotrosService.createNosotros(nosotros).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  actualizarNosotros(nosotros: Nosotros): void {
    this.nosotrosService.updateNosotros(nosotros).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];



}
