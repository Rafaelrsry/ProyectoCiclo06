import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Galeria } from '../../models/galeria/galeria';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  constructor(private http: HttpClient) {}

  getGaleria(){
    return this.http.get<any>('/assets/archivosConfi/galeria.json')
    .toPromise()
    .then(res=><Galeria[]>res.data)
    .then(data =>{return data;});
  }
}
