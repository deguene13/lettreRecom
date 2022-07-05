import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-rechercher-nume',
  templateUrl: './rechercher-nume.component.html',
  styleUrls: ['./rechercher-nume.component.css']
})
export class RechercherNumeComponent implements OnInit {
  public etudiants:any;
  numeroEtud : string;

  constructor(private etudiantService:EtudiantService,private router:Router) {
    
   }

  ngOnInit(): void {
    //this.etudiantService.listeEtudiant().subscribe(etud => {
      
   // })
  //this.etudiants = [];
  }
  onChercher (form:any){
    this.etudiantService.getEtudiantsByNum(form.numeroEtud)
    .subscribe(data=>{
      this.etudiants=data;

    },err=>{
      console.log(err);
      
    });
  
    
    
  }
  
  onDemandeEtudiant(etudiant){
    let url=etudiant._links.self.href
    this.router.navigateByUrl("/demande-etudiant/"+btoa(url));

  }


}
