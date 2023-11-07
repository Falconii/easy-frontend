import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilialModel } from '../models/filial-model';
import { ParametroFilial01 } from '../parametros/parametro-filial01';

@Injectable({
providedIn: 'root',
})
export class filialService 
{
apiURL: string = environment.apiURL;
constructor(private http: HttpClient) {}
	getFiliais(): Observable<FilialModel[]> {
		return this.http.get<FilialModel[]>(`${this.apiURL}Filiais`);
	}
	getFiliaisParametro_01(params: ParametroFilial01): Observable<FilialModel[]> {
		return this.http.post<FilialModel[]>(`${this.apiURL}filiais`,params);
	}
	getFilial(id_empresa:number,id_filial:number,id:number): Observable<FilialModel> { 
 		return this.http.get<FilialModel >(`${ this.apiURL}filial/${id_empresa}/${id_filial}/${id}`);
	}
	filialInsert(filial:FilialModel):Observable<FilialModel> { 
		return this.http.post<FilialModel>(`${this.apiURL}filial`, filial);
	}
	filialUpdate(filial:FilialModel):Observable<FilialModel> { 
		return this.http.put<FilialModel>(`${this.apiURL}filial`,filial);
	}
	filialDelete(id_empresa:number,id_filial:number,id:number):Observable<any>  { 
 		return this.http.delete<any>(`${this.apiURL}filial/${id_empresa}/${id_filial}/${id}`);
	}
}