
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiante } from '../model/etudiante.model';

@Injectable({
  providedIn: 'root'
})
export class EtudianteService {
  public url: string = 'http://localhost:8087/';

  

  constructor(private httpClient: HttpClient ) { }

  public getAllEtudiantes = () : Observable<Etudiante[]> => {
    const urlSend = this.url + 'service/etudiante/getAllEtudiantes';
    return this.httpClient.get<Etudiante[]>(urlSend);
		
		
	}
  public save = (etudiante: Etudiante): Observable<Etudiante> =>{
    const data = JSON.stringify(etudiante);
    const urlSend = this.url + 'service/etudiante/saveEtudiante';
    return this.httpClient.post<Etudiante>(urlSend, data, {
      headers: new HttpHeaders({
        'Content-Type' :'application/json'
      })
    });

  }
  public getAllSduByNumero = ( numero: string) : Observable<Etudiante[]> => {
    const urlSend = this.url + 'service/etudiante/getAllSduByName=' +numero;
    return this.httpClient.get<Etudiante[]>(urlSend);
		
		
	}

 
  
 

  
  
}
