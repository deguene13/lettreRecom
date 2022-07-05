import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from '../model/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-demande-etudiant',
  templateUrl: './demande-etudiant.component.html',
  styleUrls: ['./demande-etudiant.component.css']
})
export class DemandeEtudiantComponent implements OnInit {
 public currentEtudiant: Etudiant;
  private url:string;

  constructor(private router: Router,private activatedRoute:ActivatedRoute,
    private etudiantService:EtudiantService) { }

  ngOnInit(): void {
    this.url=atob(this.activatedRoute.snapshot.params.numeroEtud);
    this.etudiantService.getResource(this.url)
    .subscribe(data=>{
      this.currentEtudiant=data;
    },err=>{
       console.log(err);
    })
   
  }
  onEnregistrerEtudiant(value :any ){

this.etudiantService.EnregistrerResource(this.url,value)
.subscribe(data=>{
  alert("La lettre est enrégistré avec succeés")
  this.router.navigateByUrl("/rechercherNume");

},err=>{

  console.log(err);
})
  }

 

}
