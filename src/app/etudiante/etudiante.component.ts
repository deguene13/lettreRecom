import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from '../model/entreprise.model';
import { Etudiante } from '../model/etudiante.model';
import { BaseService } from '../services/base.service ';
import { EtudianteService } from '../services/etudiante.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etudiante',
  templateUrl: './etudiante.component.html',
  styleUrls: ['./etudiante.component.css']
})
export class EtudianteComponent implements OnInit {

  entreprises: Entreprise[];
  entreprise:  Entreprise = new Entreprise();
  etudiantes: Etudiante[];
  etudiante:  Etudiante = new Etudiante();
  SelectedEntreprise: Entreprise;
  numero : string;
  

  constructor( private etudianteService: EtudianteService, private router: Router, private baseService: BaseService) { }

  ngOnInit(): void {
    this.getAll();
    this.getAllEntreprises();
  }

  getAll(){
    this.etudiantes = []; 
    this.etudianteService.getAllEtudiantes().subscribe(
      result => {
        this.etudiantes = result;
      }
    );
  }

  getAllEntreprises(){
    this.entreprises = []; 
    this.baseService.getAllEntreprises().subscribe(
      result => {
        this.entreprises = result;
      }
    );
  }

  save(){
    console.log(this.entreprise);
    if (this.etudiante.prenomNon != null) {
      this.etudiante.entreprise = this.entreprise;
      this.etudianteService.save(this.etudiante).subscribe(
        result =>{
          this.etudiante = result;
         // if(this.etudiante.id > 0 ){
          
           this.getAll();
           this.etudiante = new Etudiante();
           this.router.navigate(['/etudiante']);
           
         // }
        }
      );
    }
  }
  

  getEtudianteByNumero () {
    this.etudiantes = []; 
    this.etudianteService.getEtudiantByNum(this.numero).subscribe(
      result => {
        this.etudiante = result;
       this.etudiantes.push(this.etudiante);
      }
    );
  }

  // getEtudianteByNumero () {
  //   this.getAll();
  //   this.etudiantes = this.etudiantes.filter(e=>e.numero==this.numero);
  // }
  
}
