import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) {}

  getAllUsuario():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>("http://localhost:8080/api/v1/usuario");
  }

  getUsuarioId(id:number):Observable<Usuario>{
    return this.httpClient.get<Usuario>("http://localhost:8080/api/v1/usuario/"+id);
  }


  createUsuario(usuario: Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>("http://localhost:8080/api/v1/usuario",usuario);
  }

  updateUsuario(usuario: Usuario):Observable<Usuario>{
    return this.httpClient.put<Usuario>("http://localhost:8080/api/v1/usuario/"+usuario.idusuario,usuario)
  }
}
