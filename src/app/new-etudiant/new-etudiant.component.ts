import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-new-etudiant',
  templateUrl: './new-etudiant.component.html',
  styleUrls: ['./new-etudiant.component.css']
})
export class NewEtudiantComponent implements OnInit {

  constructor(private etudiantService:EtudiantService,private router:Router) { }

  ngOnInit(): void {
  }

  onSaveEtudiant(data:any) {
   this.etudiantService.saveResource(this.etudiantService.host+"/etudiants",data)
   .subscribe(res=>{
     this.router.navigateByUrl("/etudiants");
 },err=>{
   console.log(err);
 })
  }

}
