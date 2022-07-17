import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../model/etudiant.model';
import { Etudiante } from '../model/etudiante.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  public host:string="http://localhost:8087/";

  constructor(private httpClient:HttpClient) { }
  
  public getEtudiants(){
    return this.httpClient.get(this.host+"/etudiants");
  }
  public getEtudiantsByNum = (numeroEtud:string): Observable<Etudiante[]> => {
    return this.httpClient.get<Etudiante[]>(this.host+"service/etudiante/getEtudiantsByNum/"+numeroEtud);
  }

  public getEtudiantByNum = ( numero: string) : Observable<Etudiante> => {
    console.log("service");
    const urlSend = this.host + 'service/etudiante/getEtudiantByNum/' + numero;
    return this.httpClient.get<Etudiante>(urlSend);
	}

  public saveResource(url,data){
    return this.httpClient.post(url,data);
  }

  public getResource(url):Observable<Etudiant>{
    return this.httpClient.get<Etudiant>(url);
  }
  
  public EnregistrerResource(url,data){
    return this.httpClient.put(url,data);
  }

  public getAffich(url):Observable<Etudiant>{
    return this.httpClient.get<Etudiant>(url);
  }
  public AffiResource(url,data){
    return this.httpClient.put(url,data);
  }

}
