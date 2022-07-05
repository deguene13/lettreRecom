import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from '../model/entreprise.model';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public url: string = 'http://localhost:8087/';

  constructor(private httpClient: HttpClient) { }

  

  public getAllEntreprises = () : Observable<Entreprise[]> => {
    const urlSend = this.url + 'service/base/getAllEntreprises';
    return this.httpClient.get<Entreprise[]>(urlSend);
		
		
	}
  public save = (entreprise: Entreprise): Observable<Entreprise> =>{
    const data = JSON.stringify(entreprise);
    const urlSend = this.url + 'service/base/saveEntreprise';
    return this.httpClient.post<Entreprise>(urlSend, data, {
      headers: new HttpHeaders({
        'Content-Type' :'application/json'
      })
    });

  }

  
 
}
