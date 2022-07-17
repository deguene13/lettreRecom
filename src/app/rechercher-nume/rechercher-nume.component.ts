import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';
import { Etudiante } from '../model/etudiante.model'

@Component({
  selector: 'app-rechercher-nume',
  templateUrl: './rechercher-nume.component.html',
  styleUrls: ['./rechercher-nume.component.css']
})
export class RechercherNumeComponent implements OnInit {
  public etudiants:any;
  numeroEtud : string;
  etudiante:  Etudiante = new Etudiante();
  isFound: boolean = false;

  constructor(private etudiantService:EtudiantService,private router:Router) {
    
   }

  ngOnInit(): void {
    //this.etudiantService.listeEtudiant().subscribe(etud => {
      
   // })
  //this.etudiants = [];
  }
  onChercher (){
    this.etudiante = new Etudiante();
    this.isFound = false;
    console.log(this.numeroEtud)
    this.etudiantService.getEtudiantByNum(this.numeroEtud)
    .subscribe(data=>{
      this.etudiante=data;
      if(this.etudiante != null && this.etudiante.id>0){
        this.isFound = true;
      }
    },err=>{
      console.log(err);
      
    });
  
    
    
  }
  
  onDemandeEtudiant(etudiant){
    let url=etudiant._links.self.href
    this.router.navigateByUrl("/demande-etudiant/"+btoa(url));

  }


}
