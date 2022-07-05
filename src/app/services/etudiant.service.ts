import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../model/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  public host:string="http://localhost:8082";

  constructor(private httpClient:HttpClient) { }
  
  public getEtudiants(){
    return this.httpClient.get(this.host+"/etudiants");
  }
  public getEtudiantsByNum(numeroEtud:string){
    return this.httpClient.get(this.host+"/etudiants/search/byNumeroEtud?numeroEtud="+numeroEtud);
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
