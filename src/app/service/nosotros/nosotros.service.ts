import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nosotros } from '../../models/nosotros/nosotros';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  constructor(private httpClient: HttpClient) {}



  getAllNosotros():Observable<Nosotros[]>{
    return this.httpClient.get<Nosotros[]>("http://localhost:8080/api/v1/nosotros");
  }

  getNosotrosId(id:number):Observable<Nosotros>{
    return this.httpClient.get<Nosotros>("http://localhost:8080/api/v1/nosotros/"+id);
  }


  createNosotros(nosotros: Nosotros):Observable<Nosotros>{
    return this.httpClient.post<Nosotros>("http://localhost:8080/api/v1/nosotros",nosotros);
  }

  updateNosotros(nosotros: Nosotros):Observable<Nosotros>{
    return this.httpClient.put<Nosotros>("http://localhost:8080/api/v1/nosotros/"+nosotros.idnosotros,nosotros)
  }
}
