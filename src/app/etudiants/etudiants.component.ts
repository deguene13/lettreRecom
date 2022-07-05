import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  public etudiants:any;
  //public size:number=1;
 // public currentPage:number=0;
  //public totalPages:number;
 // public pages:Array<number>;

  constructor(private etudiantService:EtudiantService,private router:Router) {
    
  }
 

  ngOnInit(): void {
    
  }
  onGetEtudiants(){
    this.etudiantService.getEtudiants()
    .subscribe(data=>{
      this.etudiants=data;

    },err=>{
      console.log(err);
      
    });
  
    
    
  }
  /*
  onPageEtudiant(i){
    this.currentPage=i;
    this.onGetEtudiants;
  }*/
  onAffichEtudiant(etudiant){
    let url=etudiant._links.self.href
    this.router.navigateByUrl("/affich-lettre/"+btoa(url));
  }
 

  
}
