import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuariosinventarioModel } from '../models/usuariosinventario-model';
import { ParametroUsuariosinventario01 } from '../parametros/parametro-usuariosinventario01';

@Injectable({
providedIn: 'root',
})
export class usuariosinventarioService 
{
apiURL: string = environment.apiURL;
constructor(private http: HttpClient) {}
	getUsuariosinventarios(): Observable<UsuariosinventarioModel[]> {
		return this.http.get<UsuariosinventarioModel[]>(`${this.apiURL}Usuariosinventarios`);
	}
	getUsuariosinventariosParametro_01(params: ParametroUsuariosinventario01): Observable<UsuariosinventarioModel[]> {
		return this.http.post<UsuariosinventarioModel[]>(`${this.apiURL}usuariosinventarios`,params);
	}
	getUsuariosinventario(id_empresa:number,id_filial:number,id_inventario:number,id_usuario:number): Observable<UsuariosinventarioModel> { 
 		return this.http.get<UsuariosinventarioModel >(`${ this.apiURL}usuariosinventario/${id_empresa}/${id_filial}/${id_inventario}/${id_usuario}`);
	}
	usuariosinventarioInsert(usuariosinventario:UsuariosinventarioModel):Observable<UsuariosinventarioModel> { 
		return this.http.post<UsuariosinventarioModel>(`${this.apiURL}usuariosinventario`, usuariosinventario);
	}
	usuariosinventarioUpdate(usuariosinventario:UsuariosinventarioModel):Observable<UsuariosinventarioModel> { 
		return this.http.put<UsuariosinventarioModel>(`${this.apiURL}usuariosinventario`,usuariosinventario);
	}
	usuariosinventarioDelete(id_empresa:number,id_filial:number,id_inventario:number,id_usuario:number):Observable<any>  { 
 		return this.http.delete<any>(`${this.apiURL}usuariosinventario/${id_empresa}/${id_filial}/${id_inventario}/${id_usuario}`);
	}
}