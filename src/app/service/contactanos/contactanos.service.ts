import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contactanos } from '../../models/contactanos/contactanos';


@Injectable({
  providedIn: 'root'
})
export class ContactanosService {

  constructor(private httpClient: HttpClient) {}

  
  getAllContactanos():Observable<Contactanos[]>{
    return this.httpClient.get<Contactanos[]>("http://localhost:8080/api/v1/contactanos");
  }

  getContactanosId(id:number):Observable<Contactanos>{
    return this.httpClient.get<Contactanos>("http://localhost:8080/api/v1/contactanos/"+id);
  }


  createContactanos(contactanos: Contactanos):Observable<Contactanos>{
    return this.httpClient.post<Contactanos>("http://localhost:8080/api/v1/contactanos",contactanos);
  }

  updateContactanos(contactanos: Contactanos):Observable<Contactanos>{
    return this.httpClient.put<Contactanos>("http://localhost:8080/api/v1/contactanos/"+contactanos.idcontactanos,contactanos)
  }
}
