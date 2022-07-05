import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from '../model/entreprise.model';
import { BaseService } from '../services/base.service ';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {
 
entreprises: Entreprise[];
entreprise:  Entreprise = new Entreprise();

  constructor(private baseService: BaseService ,private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }
  
  getAll(){
    this.entreprises = []; 
    this.baseService.getAllEntreprises().subscribe(
      result => {
        this.entreprises = result;
      }
    )
  }

  save(){
    if (this.entreprise.nom != null) {
      this.baseService.save(this.entreprise).subscribe(
        result =>{
          this.entreprise = result;
          if(this.entreprise.id > 0 ){
           this.router.navigate(['/entreprise']);
           this.entreprise = new Entreprise();
           this.getAll();
           
          }
        }
      );
    }
  }


}
